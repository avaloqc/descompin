import ListGroupBS from "react-bootstrap/ListGroup"
import Badge from "react-bootstrap/Badge"

export const ListGroup = ({ items }) => {
  return (
    <ListGroupBS as='ul'>
      {items.map((item, key) => (
        <ListGroupBS.Item key={key} as="li" className="d-flex justify-content-between">
          <div className="fw-bold">{item.title}</div>
          {item.total ? (
            <Badge bg="primary" pill>{item.total}</Badge>
          ) : null}
        </ListGroupBS.Item>
      ))}
    </ListGroupBS>
  )
}