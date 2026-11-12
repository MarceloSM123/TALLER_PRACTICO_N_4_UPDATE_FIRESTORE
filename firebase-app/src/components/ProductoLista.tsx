import {useEffect, useState} from "react";
import {obtenerProductos, type ProductoConId} from "../services/productoService";

interface ProductoListaProps {
    onEditar: (producto: ProductoConId) => void;
}

export const ProductoLista = ({ onEditar }: ProductoListaProps) => {
    const [productos, setProductos] = useState<ProductoConId[]>([]);
    useEffect(() => {
        const cargarProductos = async () => {
            try{
                const datos=await obtenerProductos();
                setProductos(datos);
            }catch(error){
                console.error("Error al obtener productos: ",error);

            }
        }
        cargarProductos();
    }, []);
    return(
        <div>
            <h2>Lista de productos</h2>
            {
                productos.map((producto) => (
                    <div>
                        <h3>Producto ID: {producto.id}</h3>
                        <p>Nombre: {producto.nombre}</p>
                        <p>Precio: ${producto.precio.toFixed(2)}</p>
                        <p>Stock: {producto.stock}</p>
                        <button onClick={() => onEditar(producto)}>Editar</button>
                    </div>
                ))
            }
        </div>
    )
    
}