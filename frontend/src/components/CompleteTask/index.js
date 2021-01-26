import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import imageIconCheck from '../../image/concluir.svg';

import {
  Container
} from './styled';

export default (props) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [displayModalErro, setDisplayModalErro] = useState(false);

  const API_URL_CONCLUDE_TASK = 'http://localhost:3002/gerenciador-tarefas/';

  function handleOpenModal(event) {
    event.preventDefault();
    setDisplayModal(true);
  }

  function handleCloseModal() {
    setDisplayModal(false);
  }

  function handleCloseModalErro() {
    setDisplayModalErro(false);
  }

  async function handleConcludeTask(event) {
    event.preventDefault();

    try {
      let { tarefa } = await axios.put(API_URL_CONCLUDE_TASK + props.taskComplete.id + '/concluir');
      setDisplayModal(false);
      props.loadTask(true);
    } catch (error) {
      setDisplayModal(false);
      setDisplayModalErro(true);
    }
  }

  return (
    <Container className={props.taskComplete.concluida}>

      <img src={imageIconCheck} style={{width: '30px', height: '30px', cursor: 'pointer'} } onClick={handleOpenModal}/>

      <Modal show={displayModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Concluir Tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deseja Realmente concluir a seguinte tarefa?
          <br/>
          <strong>{props.taskComplete.nome}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConcludeTask}> 
            Sim
          </Button>
          <Button variant="light" onClick={handleCloseModal}> 
            Não
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={displayModalErro} onHide={handleCloseModalErro}>
        <Modal.Header closeButton>
          <Modal.Title>Erro de conexão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Erro ao concluir a tarefa, por favor tente novamente!
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