import Card from 'react-bootstrap/Card'
import { ItemCount } from "./ItemCount";
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router'

export function ItemDetail ({ detail }) {
    const navigate = useNavigate()

    return (
        <div className='borde-rojo'>
            <Card className='w-100'>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Card.Img
                        className='img-fluid'
                        variant='top'
                        src={detail?.imagen}
                        style={{ height: '300px', objectFit: 'contain' }}
                        alt={detail?.descripcion}
                    />
                </div>
                <Card.Body>
                    <Card.Title>{detail?.nombre}</Card.Title>
                    <Card.Text>{detail?.descripcion}</Card.Text>
                    <Card.Text>{detail?.precio}</Card.Text>
                    <ItemCount item={detail} />
                    <Button onClick={() => navigate(-1)}>⬅️ Volver</Button>
                </Card.Body>
            </Card>
        </div>
    )
}