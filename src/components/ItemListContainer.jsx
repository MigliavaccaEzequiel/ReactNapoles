import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { ItemList } from './ItemList'

export function ItemListContainer () {
    const [items, setItems] = useState([])
    const { categoriaProducto } = useParams()
    
    useEffect(() => {
        if (categoriaProducto) {
            fetch(`https://dummyjson.com/products/category/${categoriaProducto}`)
            .then(res => res.json())
            .then(res => setItems(res.products));
        } else {
            fetch('https://dummyjson.com/products?limit=15')
            .then(res => res.json())
            .then(res => setItems(res.products));
        }
    }, [categoriaProducto])
    
    return (
        <ItemList items={items} />
    )

}