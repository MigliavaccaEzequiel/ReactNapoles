import { useState } from 'react'
import { CartContext } from "./CartContext"
import Swal from 'sweetalert2'

function CartProvider({children}) {
    const [cart, setCart] = useState([])

    const agregarAlCarrito = (item) => { 
        const enCarrito = cart.some(prod => prod.id === item.id)

        if (enCarrito) {
            const productoRepetido = cart.find(prod => prod.id === item.id)
            const sinRepetido = cart.filter(prod => prod.id !== item.id)

            setCart([...sinRepetido, {...productoRepetido, contador: productoRepetido.contador + item.contador}])
        } else {
            setCart([...cart, item])
        }

        Swal.fire({
            icon: 'success',
            title: 'Producto agregado',
            text: 'El producto se agregó al carrito',
            timer: 1000,
            showConfirmButton: false
        })
    }

    const cantidadEnCarrito = () => {
        const cantidades = cart.map(item => item.contador)
        const cantidad = cantidades.reduce((acc, current) => acc + current, 0)

        return cantidad
    }

    const costoTotal = () => {
        const totales = cart.map(item => item.contador*item.precio)
        const total = totales.reduce((acc, current) => acc + current, 0)

        return total
    }

    const eliminarProducto = (id) => {
        const nuevoCarrito = cart.filter(producto => producto.id !== id)
        setCart(nuevoCarrito)

        Swal.fire({
            icon: 'success',
            title: 'Producto eliminado',
            text: 'El producto fue eliminado del carrito',
            timer: 1000,
            showConfirmButton: false
        })
    }

    const vaciarCarrito = () => {
        setCart([])

        Swal.fire({
            icon: 'success',
            title: 'Carrito vacío',
            text: 'Se vació el carrito',
            timer: 1000,
            showConfirmButton: false
        })
    }

    const ordenCreada = () => {
        Swal.fire({
            icon: 'success',
            title: 'Orden enviada',
            text: 'Gracias por tu compra',
            timer: 1000,
            showConfirmButton: false,
        })
    }

    return(
        <CartContext.Provider value={{ cart, agregarAlCarrito, cantidadEnCarrito, costoTotal, eliminarProducto, vaciarCarrito, ordenCreada }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider