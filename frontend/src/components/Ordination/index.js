import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  FaSortContainer,
  FaSortUpContainer,
  FaSortDownContainer
} from './styled';

export default (props) => {
  return (
    <Container>
      <FaSortContainer faSorteAsc={props.ordinationAsc} faSorteDesc={props.ordinationDesc}>
        <FontAwesomeIcon icon={faSort} />
      </FaSortContainer>

      <FaSortUpContainer faSorteUpAsc={props.ordinationAsc}>
        <FontAwesomeIcon icon={faSortUp} />
      </FaSortUpContainer>

      <FaSortDownContainer faSorteDownDesc={props.ordinationDesc}>
        <FontAwesomeIcon icon={faSortDown} />
      </FaSortDownContainer>
    </Container>
  );
}