import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";


export const ModalSavePin = ({ show }) => {
  return (
    <Modal
      title="Salvar Pin"
      show={show}
      controls={[
        {
          label: 'Criar Pasta',
          variant: 'secondary',
          loading: false,
          loadingLabel: 'Criando',
          onclick: () => { 'clicou criar pasta' }
        }
      ]}>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col xs={8}> PLACEHOLDER TEXT </Col>
            <Col xs={4} className='text-end'>
              <Button label="Salvar" loadingLabel="Salvando"/>
              </Col> 
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Modal>
  )
}
