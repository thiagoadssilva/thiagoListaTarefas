import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import imageUpdate from '../../image/editar.png';

import TaskUpdateModel from '../../models/task.model';

import {
  Container
} from './styled';

export default (props) => {

  const [displayModal, setDisplayModal] = useState(false);
  const [displayModalErro, setDisplayModalErro] = useState(false);
  const [task, setTask] = useState('');
  const [loadTask, setLoadTask] = useState(true);
  const [displayModalCampoObrigatorio, setDisplayModalCampoObrigatorio] = useState(false);

  const API_URL_UPDATE_TASK = 'http://localhost:3002/gerenciador-tarefas/';

  function handleTextTask(event) {
    setTask(event.target.value);
  }

  function handleCloseModal() {
    setDisplayModal(false);
  }

 
  function handleCloseModalCampoObrigatorio() {
    setDisplayModalCampoObrigatorio(false);
  }

  function handleCloseModalErro() {
    setDisplayModalErro(false);
  }

  useEffect(() => {

    async function getTask() {

      try {
        let { data } = await axios.get(API_URL_UPDATE_TASK + props.taskUpdateId);
        setTask(data.nome);
      } catch (error) {
        setDisplayModal(false);
        setDisplayModalErro(true);
      }
    }

    if (loadTask) {
      getTask();
      setLoadTask(true);
    }
  }, [loadTask, props]);

  async function handleUpdate(event) {
    if (task === '') {
      setDisplayModalCampoObrigatorio(true);
    } else {

      event.preventDefault();
      try {
        const taskUpdate = new TaskUpdateModel(null, task, false);
        await axios.put(API_URL_UPDATE_TASK + props.taskUpdateId, taskUpdate);
        setDisplayModal(false);
        props.loadTask(true);
        setTask('');
      } catch (error) {
        setDisplayModal(false);
        setDisplayModalErro(true);
      }
    }
  }

  return (
    <Container>

      <img src={imageUpdate} style={{ width: '30px', height: '30px', cursor: 'pointer' }} onClick={setDisplayModal} />

      <Modal backdrop="static" show={displayModal} onHide={handleCloseModal} size="lg" centered aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title>Atualizar Tarefa</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Informe o nome da tarefa:</Form.Label>
              <Form.Control type="text" value={task} onChange={handleTextTask}>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Form.Group>
            <Button variant="success" className=" btn btn-success btn-sm" onClick={handleUpdate} >
              Alterar
            </Button>
            &nbsp;
            <Button variant="danger" className=" btn btn-success btn-sm" onClick={handleCloseModal}>
              Cancelar
            </Button>
          </Form.Group>
        </Modal.Footer>
      </Modal>

      <Modal show={displayModalCampoObrigatorio} onHide={handleCloseModalCampoObrigatorio} centered aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title>Atenção</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Campo:  <b>informe o nome da tarefa é obrigatório.</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseModalCampoObrigatorio}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={displayModalErro} onHide={handleCloseModalErro} centered aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title>Atenção</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Erro ao tentar conectar com servidor, por favor tente novamente!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseModalErro}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
}