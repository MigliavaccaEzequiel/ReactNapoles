import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router'

export function Item ({ item }) {
    const navigate = useNavigate()

    return (
        <Card className='w-100 h-100 borde-card'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card.Img 
                    className='img-fluid'
                    variant='top'
                    src={item.imagen} 
                    style={{ height: 'auto', objectFit: 'cover' }}
                    alt={item.descripcion}
                />
            </div>
            <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{item.descripcion}</Card.Text>
                <Button 
                    variant="dark"
                    onClick={() => navigate(`/item/${item.id}`)}
                >
                    Ver más
                </Button>
            </Card.Body>
        </Card>
    )
}