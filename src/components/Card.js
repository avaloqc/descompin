import Badge from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Badge';
import CardBS from 'react-bootstrap/Card'

export const Card = ( { image, title, total}) => {
  return (
    <CardBS className="bg-primary text-white">
      <CardBS.Img src={image} alt="CardBS image" />
      <CardBS.ImgOverlay>
        <Button variant="primary">
          Profile <Badge bg="secondary">{total}</Badge>
        </Button>
      </CardBS.ImgOverlay>
      <CardBS.Body>
        <CardBS.Title>{title}</CardBS.Title>
      </CardBS.Body>
    </CardBS>
  );
}

