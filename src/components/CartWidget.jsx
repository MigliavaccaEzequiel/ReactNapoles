import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router'

export function CartWidget () {
    const { cantidadEnCarrito } = useContext(CartContext)
    const cantidad = cantidadEnCarrito()
    const navigate = useNavigate()
    
    return (
        <Button className='boton-filtro'
        onClick={() => navigate('/cart')}
        >
        🛒 {cantidad}
        </Button>
    )
}