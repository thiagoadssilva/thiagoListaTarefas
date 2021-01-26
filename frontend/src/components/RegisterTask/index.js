import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import Task from '../../models/task.model';
import axios from 'axios';
import iconPlus from '../../image/plus.png';

import {
  Container
} from './styled';

export default (props) => {

  const API_URL_REGISTER_TASK = "http://localhost:3002/gerenciador-tarefas";

  const [registerTask, setRegisterTask] = useState('');
  const [displayModal, setDisplayModal] = useState(false);
  const [displayModalErro, setDisplayModalErro] = useState(false);

  async function register(event) {
    event.preventDefault();

    if (event.currentTarget.checkValidity() === true) {
      try {
        const newTask = new Task(null, registerTask, false);
        await axios.post(API_URL_REGISTER_TASK, newTask);
        handleCloseModal();
        props.loadTask(true);        
        setRegisterTask('');
      } catch (error) {
        setDisplayModalErro(true);
        setDisplayModal(false);
      }
    }
  }

  function handleTextTask(event) {
    setRegisterTask(event.target.value);
  }

  function handleCloseModal() {
    setDisplayModal(false);
  }

  function handleCloseModalErro() {
    setDisplayModalErro(false);
  }

  function handleOpenModal() {
    setDisplayModal(true);
  }

  return (
    <Container>
      <Button onClick={handleOpenModal} variant="success" style={{ color: '#000000', margin: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
        Adicionar
        <img src={iconPlus} style={{ width: '30px', height: '30px', marginLeft: '15px' }} />
      </Button>

      <Modal show={displayModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Tarefa</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control type="text" placeholder="Informe a Tarefa" minLength="5" maxLength="100" required value={registerTask} onChange={handleTextTask}>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Form.Group>
            <Button variant="success" className=" btn btn-success btn-sm" onClick={register} >
              Adicionar
            </Button>
            &nbsp;
            <Button variant="danger" className=" btn btn-success btn-sm" onClick={handleCloseModal}>
              Cancelar
            </Button>
          </Form.Group>
        </Modal.Footer>
      </Modal>

      <Modal show={displayModalErro} onHide={handleCloseModalErro}>
        <Modal.Header closeButton>
          <Modal.Title>Erro de conexão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Erro ao cadastrar, por favor tente novamente!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseModalErro}>
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>
      
    </Container>
  );
}