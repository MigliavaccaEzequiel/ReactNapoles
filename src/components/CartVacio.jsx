import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router"

export function CartVacio () {
    const navigate = useNavigate()
    
    return (
        <div className='borde-rojo'>
            <h1>Carrito vacío.</h1>
            <Button className='boton-filtro'
            onClick={() => navigate('/')}
            >
            Inicio
            </Button>
        </div>
    )
}
