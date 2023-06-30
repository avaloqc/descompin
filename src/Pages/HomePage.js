import { Container, Row, Col } from 'react-bootstrap';
import { Card } from '../components/Card';
import { ModalSavePin } from '../containers/ModalSavePin';
import { ModalCreateFolder } from '../containers/ModalCreateFolder';
import { Notification } from '../components/Notification/Notification';
import { useAppContext } from '../storage/AppContext';


export const HomePage = () => {
  const value = useAppContext();
  return (
    <>
      <Notification
        message='Criado com successo'
        onClose={() => { console.log('clicou em fechar'); }}
      />
      <ModalSavePin show={false} />
      <ModalCreateFolder show={false} />
      <Container fluid>
        <Row>
          <Col xs={12} md={2}><Card title="Título" image="https://picsum.photos/seed/picsum/200/235" total={3} /></Col>
        </Row>
      </Container>
    </>
  )
}