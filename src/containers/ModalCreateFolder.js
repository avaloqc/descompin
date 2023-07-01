import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Modal } from "../components/Modal";
import { useAppContext } from '../storage/AppContext'
import { closeModalsAction, saveFolderAction } from "../storage/actions";
import { SaveFolderInitType, SaveFolderSuccessType } from "../storage/types";

export const ModalCreateFolder = ({ show }) => {
  const [folderName, setFolderName] = useState('');
  const { state, dispatch } = useAppContext();
  
  useEffect(() => {
    if (state.type === SaveFolderSuccessType) {
      handleClose();
    }
  }, [state.type])

  const handleClose = () => {
    dispatch(closeModalsAction());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    saveFolderAction(folderName, dispatch)
  }

  const handleChange = (e) => {
    setFolderName(e.target.value);
  }

  return (
    <Modal
      show={show}
      title="Criar pasta"
      onHide={handleClose}
      controls={[
        {
          label: 'Criar e salvar',
          loadingLabel: 'Criando',
          variant: 'secondary',
          loading: state.type === SaveFolderInitType,
          type:'submit',
          form: 'form-criar-pasta',
        }
      ]}
    >
      <Form onSubmit={handleSubmit} id='form-criar-pasta'>
        <Form.Group className="mb-3" controlId="NomeDePasta">
          <Form.Label>Nome da Pasta</Form.Label>
          <Form.Control type="text" placeholder="Ex: Natureza" value={folderName} onChange={handleChange}/>
        </Form.Group>
      </Form>
    </Modal>
  )
} 