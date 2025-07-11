import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { ItemDetail } from './ItemDetail'
import { obtenerUnProducto } from '../firebase/db'

export function ItemDetailContainer () {
    const [detail, setDetail] = useState()
    const { id } = useParams()

    useEffect(() => {
        obtenerUnProducto(id)
            .then(producto => setDetail(producto))
    }, [id])
    
    return (
        <ItemDetail detail={detail} />
    )
}