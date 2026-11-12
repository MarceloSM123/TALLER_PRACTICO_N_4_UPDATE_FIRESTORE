import { useState, type SyntheticEvent } from 'react'
import { crearProducto,actualizarProducto, type ProductoConId } from '../services/productoService'

interface ProductoFormProps {
  productoEditar: ProductoConId | null;
}

export default function ProductoForm({ productoEditar }: ProductoFormProps) {
  const [nombre, setNombre] = useState(productoEditar?.nombre ??"")
  const [precio, setPrecio] = useState(productoEditar?.precio?.toString() ?? "")
  const [stock, setStock] = useState(productoEditar?.stock?.toString() ?? "")
  const [guardando, setGuardando] = useState(false)

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setGuardando(true)
    if(productoEditar) {
            await actualizarProducto(productoEditar.id, 
                nombre.trim(), 
                Number(precio), 
                Number(stock))
            console.log('Documento actualizado con ID: ', productoEditar.id)
            setGuardando(false)
        }else{
    try {
      const id = await crearProducto(
        nombre.trim(),
        Number(precio),
        Number(stock)
      )
      console.log('Documento escrito con ID: ', id)
      // limpiar formulario
      setNombre('')
      setPrecio('')
      setStock('')
    } catch (error) {
      console.error('Error añadiendo documento: ', error)
    } finally {
      setGuardando(false)
    }}
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="number"
        step="any"
        placeholder="Precio del producto"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        required
      />
      <input
        type="number"
        step="any"
        placeholder="Stock del producto"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        required
      />
      <button type="submit" disabled={guardando}>
        {guardando
          ? 'Guardando...'
          : productoEditar
            ? 'Actualizar'
            : 'Guardar'}
      </button>
    </form>
  )
}