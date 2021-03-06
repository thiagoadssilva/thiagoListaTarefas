import React, { useState } from 'react';
import iconeRemove from '../../image/excluir.svg';
import { Modal, Button } from 'react-bootstrap';
import Api from '../../services/Api';

import {
  Container
} from './styled';

export default (props) => {

  const [displayModal, setDisplayModal] = useState(false);
  const [displayModalErro, setDisplayModalErro] = useState(false);

  let text = "Deseja realmente excluir a terafa?";

  function handleOpenModal(event) {
    event.preventDefault();
    setDisplayModal(true);
  }

  function handleCloseModal() {
    setDisplayModal(false);
  }

  function handleCloseModalErro() {
    setDisplayModalErro(false);
    setDisplayModal(false);
  }

  async function handleRemoveTask(event) {
    event.preventDefault();

    try {
      let {task} = await Api.delete("gerenciador-tarefas/" + props.taskRemove.id);
      setDisplayModal(false);
      props.loadTask(true);
    } catch (error) {
      //setDisplayModalErro(true);
      setDisplayModal(false);
    }
  }

  return (
    <Container>
      <img src={iconeRemove} onClick={handleOpenModal} style={{ width: '30px', height: '30px', cursor: 'pointer' }} />

      <Modal show={displayModal} onHide={handleCloseModal} centered aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title>Remover Tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {text}
          <br />
          <strong>{props.taskRemove.nome}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleRemoveTask}>
            Sim
          </Button>
          <Button variant="light" onClick={handleCloseModal}>
            Não
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={displayModalErro} onHide={handleCloseModalErro} centered aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title>Erro de conexão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Erro ao remover a tarefa por favor, tente novamente!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleCloseModalErro}>
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}