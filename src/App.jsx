import { BrowserRouter, Routes, Route } from 'react-router'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import { CartContainer } from './components/CartContainer'
import { OrdenCompra } from './components/OrdenCompra'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoriaProducto" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/ordenCompra" element={<OrdenCompra />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
