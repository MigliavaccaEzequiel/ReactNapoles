import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'

export function ItemCount({ item }) {
  const [contador, setContador] = useState(1);
  const { agregarAlCarrito } = useContext(CartContext)

  const aumentar = () => setContador(contador + 1)
  const disminuir = () => {
    if (contador > 1) {
      setContador(contador - 1)
    }
  }
  const limpiar = () => setContador(1)
  const agregar = () => agregarAlCarrito({...item, contador})

  return (
    <div className='contador'>
      <p>Cantidad: {contador}</p>
      <button onClick={disminuir}>-</button>
      <button onClick={limpiar}>Limpiar</button>
      <button onClick={aumentar}>+</button>
      <button onClick={agregar}>Agregar al Carrito</button>
    </div>
  )
}