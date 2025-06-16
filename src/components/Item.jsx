import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router'

export function Item ({ item }) {
    const navigate = useNavigate()

    return (
        <Card className='w-100'>
            <Card.Img variant='top' src={item.thumbnail} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
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