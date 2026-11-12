import ProductoForm from './components/ProductoForm'
import{ProductoLista} from './components/ProductoLista'
import './App.css'
import type {ProductoConId} from './services/productoService'
import { useState } from 'react';
function App() {
  const [productoEditar, setProductoEditar] = useState<ProductoConId | null>(null);
  return (
    <div>
      <h1>Registro de productos</h1>
      <ProductoForm key={productoEditar?.id ?? 'nuevo'} productoEditar={productoEditar}/>
      <ProductoLista onEditar={setProductoEditar}/>
    </div>
  )
}

export default App