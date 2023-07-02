import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CardContainer } from '../containers/Card';
import { ModalSavePin } from '../containers/ModalSavePin';
import { ModalCreateFolder } from '../containers/ModalCreateFolder';
import { Notification } from '../components/Notification/Notification';
import { useAppContext } from '../storage/AppContext';
import { SaveFolderSuccessType } from '../storage/types';

const pinsData = [
  {
    id: '123',
    title: 'Triginometria',
    image: 'https://picsum.photos/200/300?53',
    total: 0,
  },
  {
    id: '234',
    title: 'JavaScript',
    image: 'https://picsum.photos/200/300?52',
    total: 0,
  },
  {
    id: '456',
    title: 'Natureza',
    image: 'https://picsum.photos/200/300?51',
    total: 0,
  }
]

export const HomePage = () => {
  const { state } = useAppContext();
  const [showAlert, setShowAlert] = useState(false);

  const pinsNormalized = pinsData.map(data => (
    {
      ...data,
      total: state.folders.filter(folder => folder.pins.includes(data.id)).length
    }
  ))


  useEffect(() => {
    if (state.type === SaveFolderSuccessType) {
      setShowAlert(true);
    }
  }, [state.type])

  const handleCloseAlert = () => {
    setShowAlert(false);
  }
  return (
    <>
      {showAlert && (
        <Notification
          message='Criado com successo'
          onClose={handleCloseAlert}
        />
      )}
      <ModalSavePin show={state.mode === 'savePin'} />
      <ModalCreateFolder show={state.mode === 'createFolder'} />
      <Container fluid>
        <Row>
          {pinsNormalized.map(card => (
            <Col key={card.id} xs={12} md={2}>
              <CardContainer
                id={card.id}
                title={card.title}
                image={card.image}
                total={card.total}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}