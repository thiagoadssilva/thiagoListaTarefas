import React from 'react';
import imageHomeScreen from '../../image/homeScreen.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { A } from 'hookrouter';

import {
  Container,
  ImageHome,
  ImageText,
  ContainerSignIn
} from './styled';

export default () => {

  function handlePageListTask() {
    navigator('/listTask')
  }

  return (
    <Container>
      <ImageHome src={imageHomeScreen} alt='Lista de Tarefa' />

      <ContainerSignIn>
        <ImageText>
          Crie sua lista de tarefas e tenha um controle de tudo!!
        </ImageText>

        <A href='/listTask'>
          <FontAwesomeIcon icon={faSignInAlt} style={{ width: '133px', height: '142px', marginLeft: '100px', color: '#376477' }} />
        </A>

      </ContainerSignIn>

    </Container>
  );
}