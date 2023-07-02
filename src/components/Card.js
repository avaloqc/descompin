import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import CardBS from 'react-bootstrap/Card'

export const Card = ( { id, image, title, total, onClick }) => {
  return (
    <CardBS className="bg-light text-black">
      <CardBS.Img src={image} alt="CardBS image" />
      <CardBS.ImgOverlay>
        <Button variant="primary" onClick={()=>{onClick(id)}}>
          Salvar <Badge bg="secondary">{total}</Badge>
        </Button>
      </CardBS.ImgOverlay>
      <CardBS.Body>
        <CardBS.Title>{title}</CardBS.Title>
      </CardBS.Body>
    </CardBS>
  );
}

