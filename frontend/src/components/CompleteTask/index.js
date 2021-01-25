import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import imagee from '../../image/concluir.svg';

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
      <Button className="btn-sm" onClick={handleOpenModal}>
        <FontAwesomeIcon  icon={faClipboardCheck}/>
      </Button>

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
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}