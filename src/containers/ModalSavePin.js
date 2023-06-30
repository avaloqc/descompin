import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import { useAppContext } from '../storage/AppContext'


export const ModalSavePin = ({ show }) => {
  const { dispatch } = useAppContext();
  const handleClose = () => {
    dispatch({
      type: 'close modals'
    })
  }
  return (
    <Modal
      title="Salvar Pin"
      show={show}
      onHide={handleClose}
      controls={[
        {
          label: 'Criar Pasta',
          variant: 'secondary',
          loading: false,
          loadingLabel: 'Criando',
          onClick: () => { 'clicou criar pasta' }
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
