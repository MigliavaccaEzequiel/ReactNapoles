import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router'
import { crearOrden } from '../firebase/db'
import { serverTimestamp } from 'firebase/firestore'

export function OrdenCompra (){
    const { cart, vaciarCarrito, ordenCreada } = useContext( CartContext )
    const navigate = useNavigate()

    const handleEnviar = e => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const nombre = form.nombre.value
        const telefono = form.telefono.value

        crearOrden({
            email,
            nombre,
            telefono,
            productos: cart,
            time: serverTimestamp()
        })

        ordenCreada()
        navigate('/')
        vaciarCarrito()
    }

    return (
        <div className='borde-rojo centrar-col'>
            <Form className="w-75" onSubmit={handleEnviar}>
                <Form.Group className="contenedor-fila" controlId="email">
                    <Form.Label className="margenes">E-mail</Form.Label>
                    <Form.Control type="email" placeholder="email@dominio.com" required />
                </Form.Group>

                <Form.Group className="contenedor-fila" controlId="nombre">
                    <Form.Label className="margenes">Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Marshall Mathers" required />
                </Form.Group>

                <Form.Group className="contenedor-fila" controlId="telefono">
                    <Form.Label className="margenes">Telefono</Form.Label>
                    <Form.Control type="text" placeholder="2477123456" required />
                </Form.Group>

                <Button type="submit" className='boton-filtro'>
                    Enviar
                </Button>
            </Form>
        </div>
    ) 
}