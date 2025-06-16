import Card from 'react-bootstrap/Card'
import { ItemCount } from "./ItemCount";

export function ItemDetail ({ detail }) {
    return (
        <div className='borde-rojo'>
            <Card className='w-100'>
                <Card.Img variant='top' src={detail?.thumbnail} />
                <Card.Body>
                    <Card.Title>{detail?.title}</Card.Title>
                    <Card.Text>{detail?.description}</Card.Text>
                    <Card.Text>{detail?.price}</Card.Text>
                    <ItemCount />
                </Card.Body>
            </Card>
        </div>
    )
}