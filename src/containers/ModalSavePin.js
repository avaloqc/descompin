import { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import { useAppContext } from '../storage/AppContext'
import { closeModalsAction, fetchFoldersAction, openModalCreateFolderAction } from "../storage/actions";

export const ModalSavePin = ({ show }) => {
  const { state, dispatch } = useAppContext();
  const handleClose = () => {
    dispatch(closeModalsAction())
  }
  const handleClickCreateFolder = () => {
    dispatch(openModalCreateFolderAction())
  }

  useEffect(() => {
    fetchFoldersAction(dispatch);
  }, [])

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
          onClick: handleClickCreateFolder
        }
      ]}>
      <ListGroup variant="flush">
        {state.folders.map((folder, folderIndex) => (
          <ListGroup.Item key={folderIndex}>
            <Row>
              <Col xs={8}> {folder.name} </Col>
              <Col xs={4} className='text-end'>
                <Button label="Salvar" loadingLabel="Salvando" />
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Modal>
  )
}
