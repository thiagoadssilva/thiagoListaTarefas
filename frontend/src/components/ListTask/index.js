import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { A } from 'hookrouter';
import { Table, Form, Button } from 'react-bootstrap';
import ContainerGridItems from '../ContainerGridItems';
import axios from 'axios';
import iconPlus from '../../image/plus.png';
import iconSearch from '../../image/pesquiser.png';

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

    //- Contante que vai ter o link para listar todoas as tarefas através da api  
    const API_URL_LIST_TASK = "http://localhost:3002/gerenciador-tarefas";

    //- Useeffect que vai ao carregar aplicação vai fazer a comunicação com api e vai pegar todas as tarefas
    useEffect(() => {
        async function getTask() {
            try {
                let { data } = await axios.get(API_URL_LIST_TASK);
                setTasks(data.tarefas);
            } catch (error) {
                setTasks([]);
            }
        }

        if (loadTask) {
            getTask();
            setLoadTask(false);
        }
    }, [loadTask]);


    return (
        <Container>
            <ContainerHeader>
                <HeaderTitle>Lista de Tarefas</HeaderTitle>
                <A href="/">
                    <FontAwesomeIcon icon={faTimes} style={{ margin: '15px', fontSize: '30px', textDecoration: 'none', color: '#000000' }} />
                </A>
            </ContainerHeader>

            <ContainerSearchRegister>
                <img  src={iconSearch} style={{ width: '30px', height: '30px', marginLeft: '15px' }}/>
                <Form.Control type="text" placeholder="Procure sua tarefa" style={{ margin: '15px', backgroundColor: '#EBF1C5' }} />
                <Button variant="success" style={{ color: '#000000', margin: '15px', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
                    Adicionar
                    <img src={iconPlus} style={{ width: '30px', height: '30px', marginLeft: '15px' }}/>
                </Button>
            </ContainerSearchRegister>

            <ContainerGridTask>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr style={{textAlign: 'center'}}>
                            <th>Concluir</th>
                            <th>Nome da Tarefa</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <ContainerGridItems tasks={tasks} loadTask={setLoadTask} />
                </Table>
            </ContainerGridTask>
        </Container>
    );
}