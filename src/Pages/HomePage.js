import { Container, Row, Col } from 'react-bootstrap';
import { Card } from '../components/Card';
import { ModalSavePin } from '../containers/ModalSavePin';
import { ModalCreateFolder } from '../containers/ModalCreateFolder';


export const HomePage = () =>
(
  <>
    <ModalCreateFolder show={true} />
    <Container flu  id>
      <Row>
        <Col xs={12} md={2}><Card title="Título" image="https://picsum.photos/seed/picsum/200/200" total={3} /></Col>
      </Row>
    </Container>
  </>
)
