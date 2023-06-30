import { Container, Row, Col } from 'react-bootstrap';
import { CardContainer } from '../containers/Card';
import { ModalSavePin } from '../containers/ModalSavePin';
import { ModalCreateFolder } from '../containers/ModalCreateFolder';
import { Notification } from '../components/Notification/Notification';
import { useAppContext } from '../storage/AppContext';


export const HomePage = () => {
  const { state, dispatch } = useAppContext();
  return (
    <>
      <Notification
        message='Criado com successo'
        onClose={() => { console.log('clicou em fechar'); }}
      />
      <ModalSavePin show={state.mode === 'savePin'} />
      <ModalCreateFolder show={state.mode === 'createFolder'} />
      <Container fluid>
        <Row>
          <Col xs={12} md={2}><CardContainer title="Título" image="https://picsum.photos/seed/picsum/200/235" total={3} /></Col>
        </Row>
      </Container>
    </>
  )
}