import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Modal } from "../components/Modal";

export const ModalCreateFolder = ({ show }) => {
  const [folderName, setFolderName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    setFolderName(e.target.value);
  }

  return (
    <Modal
      show={show}
      title="Criar pasta"
      controls={[
        {
          label: 'Criar e salvar',
          loadingLabel: 'Criando',
          variant: 'secondary',
          loading: false,
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