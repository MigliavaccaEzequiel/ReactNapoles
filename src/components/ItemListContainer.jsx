import { useState, useEffect, } from 'react'
import { useParams } from 'react-router'
import { ItemList } from './ItemList'
import { obtenerProductos, filtrarPorCategoria } from '../firebase/db'

export function ItemListContainer () {
    const [items, setItems] = useState([])
    const { categoriaProducto } = useParams()
    
    useEffect(() => {
        if (categoriaProducto) {
            filtrarPorCategoria(categoriaProducto)
                .then(productos => setItems(productos))
        } else {
            obtenerProductos()
            .then(productos => {
                setItems(productos)
            })
        }
    }, [categoriaProducto])
    
    return (
        <ItemList items={items} />
    )

}