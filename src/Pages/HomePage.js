import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CardContainer } from '../containers/Card';
import { ModalSavePin } from '../containers/ModalSavePin';
import { ModalCreateFolder } from '../containers/ModalCreateFolder';
import { Notification } from '../components/Notification/Notification';
import { useAppContext } from '../storage/AppContext';
import { SaveFolderSuccessType } from '../storage/types';
import { fetchPinsDataAction } from '../storage/actions'; 

export const HomePage = () => {
  const { state, dispatch } = useAppContext();
  const [showAlert, setShowAlert] = useState(false);

  const pinsNormalized = state.pinCards.map(data => (
    {
      ...data,
      total: state.folders.filter(folder => folder.pins.includes(data.id)).length
    }
  ))

  useEffect(() => {
    fetchPinsDataAction(dispatch);
  }, [])

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