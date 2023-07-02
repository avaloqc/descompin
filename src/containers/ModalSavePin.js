import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import { useAppContext } from '../storage/AppContext'
import {
  closeModalsAction,
  fetchFoldersAction,
  openModalCreateFolderAction,
  savePinInFolderAction
} from "../storage/actions";

export const ModalSavePin = ({ show }) => {
  const { state, dispatch } = useAppContext();
  const [itensLoading, setItensLoading] = useState({});

  const handleClose = () => {
    dispatch(closeModalsAction())
  }
  const handleClickCreateFolder = () => {
    dispatch(openModalCreateFolderAction())
  }

  const handleClickSaveButton = async (folderId) => {
    setItensLoading((prevState) => {
      return {
        ...prevState,
        [folderId]: true
      }
    });

    await savePinInFolderAction(dispatch, state.activePinId, folderId)

    setItensLoading((prevState) => {
      return {
        ...prevState,
        [folderId]: false
      }
    });
  }
  
  const foldersNormalized = state.folders.map(folder => {
    return ({
      ...folder,
      saved: folder.pins.includes(state.activePinId)
    })
  })

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
        {foldersNormalized.map((folder, folderIndex) => (
          <ListGroup.Item key={folderIndex}>
            <Row>
              <Col xs={8}> {folder.name} </Col>
              <Col xs={4} className='text-end'>
                <Button
                  label={folder.saved ? 'Salvo' : 'Salvar'}
                  loadingLabel="Salvando"
                  onClick={() => { handleClickSaveButton(folder.id) }}
                  variant={folder.saved ? 'secondary' : 'primary'}
                  disabled={folder.saved ? true : false}
                  loading={itensLoading[folder.id]}
                />
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Modal>
  )
}
