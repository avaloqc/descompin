import { Button } from "./Button";
import ModalBS from "react-bootstrap/Modal";


export const Modal = ({ title, children, show, controls = [], onHide }) => {
  return (
    <ModalBS show={show} onHide={onHide}>
      <ModalBS.Header closeButton>
        <ModalBS.Title>{title}</ModalBS.Title>
      </ModalBS.Header>
      <ModalBS.Body>{children}</ModalBS.Body>
      <ModalBS.Footer>
        {controls.map((control, controlIndex) => (
          <Button 
            key={controlIndex} 
            {...control}
            />
        ))}
      </ModalBS.Footer>
    </ModalBS>
  );
}