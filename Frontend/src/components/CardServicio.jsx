import { Card, Button } from "react-bootstrap";

function CardServicio({ titulo, descripcion, imagen }) {
  return (
    <Card className="cardServicios">
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Button variant="primary">Más información</Button>
      </Card.Body>
    </Card>
  );
}

export default CardServicio;
