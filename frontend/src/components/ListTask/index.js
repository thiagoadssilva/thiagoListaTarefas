import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { A } from 'hookrouter';
import { Table, Form } from 'react-bootstrap';
import ContainerGridItems from '../ContainerGridItems';
import axios from 'axios';
import iconSearch from '../../image/pesquiser.png';
import RegisterTask from '../RegisterTask';
import Ordanation from '../Ordination'

import {
    Container,
    ContainerHeader,
    ContainerSearchRegister,
    ContainerGridTask,
    HeaderTitle
} from './styled';

export default () => {
    const [tasks, setTasks] = useState([]);
    const [loadTask, setLoadTask] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [filterTask, setFilterTask] = useState('');
    const [ordinationDesc, setOrdinationDesc] = useState(false);
    const [ordinationAsc, setOrdinationAsc] = useState(false);

    //- Contante que vai ter o link para listar todoas as tarefas através da api  
    const API_URL_LIST_TASK = "http://localhost:3002/gerenciador-tarefas";

    //- Useeffect que vai ao carregar aplicação vai fazer a comunicação com api e vai pegar todas as tarefas
    useEffect(() => {
        async function getTask() {

            let order = ''

            if (ordinationAsc) {
                order = 'ASC';
            } else if (ordinationDesc) {
                order = 'DESC';
            }

            try {
                const param = `?filtro-tarefa=${filterTask}&ordem=${order}`;
                let { data } = await axios.get(API_URL_LIST_TASK + param);
                setTasks(data.tarefas);
            } catch (error) {
                setTasks([]);
            }
        }

        if (loadTask) {
            getTask();
            setLoadTask(false);
        }
    }, [loadTask, filterTask]);

    function handleFilterTask(event) {
        setFilterTask(event.target.value);
        setLoadTask(true);
    }

    function handleOrdination(event) {
        event.preventDefault();

        if (!ordinationAsc && !ordinationDesc) {
            setOrdinationAsc(true);
            setOrdinationDesc(false);
        } else if (ordinationAsc) {
            setOrdinationAsc(false);
            setOrdinationDesc(true);
        } else {
            setOrdinationAsc(false);
            setOrdinationDesc(false);
        }
        setLoadTask(true);
    }



    return (
        <Container>
            <ContainerHeader>
                <HeaderTitle>Lista de Tarefas</HeaderTitle>
                <A href="/">
                    <FontAwesomeIcon icon={faTimes} style={{ margin: '15px', fontSize: '30px', textDecoration: 'none', color: '#000000' }} />
                </A>
            </ContainerHeader>

            <ContainerSearchRegister>
                <img src={iconSearch} style={{ width: '30px', height: '30px', margin: '15px', marginRight: '5px' }} />
                <Form.Control type="text" placeholder="Procure sua tarefa" style={{ margin: '10px', backgroundColor: '#EBF1C5' }} onChange={handleFilterTask} value={filterTask} />
                <RegisterTask openModal={openModal} loadTask={setLoadTask} />
            </ContainerSearchRegister>


            <ContainerGridTask>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr style={{ textAlign: 'center' }}>
                            <th>Concluir</th>
                            <th><a style={{ display: 'flex', justifyContent: 'center' }} onClick={handleOrdination}>Nome da Tarefa &nbsp; <Ordanation ordinationAsc={ordinationAsc} ordinationDesc={ordinationDesc} /></a> </th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <ContainerGridItems tasks={tasks} loadTask={setLoadTask} />
                </Table>
            </ContainerGridTask>


        </Container>
    );
}