import React from 'react';
import CompleteTask from '../CompleteTask';
import RemoveTask from '../RemoveTask';

import imageUpdate from '../../image/editar.png';
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
          <td style={{display: 'flex', justifyContent: 'center'}}>
            {item.concluida === false &&
              <A href={"/updateTask" + item.id}>
                <img src={imageUpdate} style={{ width: '30px', height: '30px', cursor: 'pointer' }} />
              </A>
            }
            <RemoveTask taskRemove={item} loadTask={props.loadTask} />
          </td>
        </tr>
      )}
    </Container>
  );
}