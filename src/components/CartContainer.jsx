import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from "react-router"
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { CartVacio } from './CartVacio'

export function CartContainer () {
    const { cart, costoTotal, eliminarProducto, vaciarCarrito } = useContext( CartContext )
    const total = costoTotal()
    const navigate = useNavigate()

    if (cart.length === 0) return <CartVacio />
    
    return (
        <div className='borde-rojo'>
            <h1>Tu pedido</h1>
            <ListGroup>
                {cart.map(item => (
                    <ListGroup.Item key={item.id}>
                        <div className='contenedor-fila'>
                            <p>{item.contador} unidad(es) de: {item.nombre} =${item.contador*item.precio}</p>
                            <Button onClick={() => eliminarProducto(item.id)}>⛔</Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <h2>TOTAL: {total}</h2>
            
            <Button onClick={() => navigate(-1)}>⬅️ Volver</Button>
            
            <Button
            className='boton-filtro'
            onClick={() => navigate('/ordenCompra')}
            >
                Iniciar Orden de Compra
            </Button>

            <Button onClick={vaciarCarrito}>🗑️ Vaciar Carrito</Button>
        </div>
    )
}