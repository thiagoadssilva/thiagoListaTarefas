import React from 'react';
import CompleteTask from '../CompleteTask';
import RemoveTask from '../RemoveTask';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { A } from 'hookrouter';

import {
  Container
} from './styled';

export default (props) => {

  function completed(item) {
    return item.concluida ? 'line-through' : 'none';
  }

  return (
    <Container>
      {props.tasks.map((item) =>
        <tr key={item.id}>
          <td width='10%'>
            <CompleteTask taskComplete={item} loadTask={props.loadTask} hideIcon={item.concluida ? 'hidden' : null} />
          </td>
          <td width='80%' style={{ textDecoration: completed(item) }}>
            {item.nome}
          </td>
          <td width='10%'>
            {item.concluida === false &&
              <A href={"/updateTask" + item.id}>
                <FontAwesomeIcon icon={faEdit} />
              </A>
            }
            <RemoveTask  taskComplete={item} loadTask={props.loadTask}/>
          </td>
        </tr>
      )}
    </Container>
  );
}