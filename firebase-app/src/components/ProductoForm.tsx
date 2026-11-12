import { useState, type SyntheticEvent } from 'react'
import { crearProducto } from '../services/productoService'

export default function ProductoForm() {
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')
  const [stock, setStock] = useState('')
  const [guardando, setGuardando] = useState(false)

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setGuardando(true)
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
    }
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
        {guardando ? 'Guardando...' : 'Guardar'}
      </button>
    </form>
  )
}