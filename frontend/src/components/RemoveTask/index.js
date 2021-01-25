import React from 'react';
import iconeRemove from '../../image/excluir.svg';

import {
    Container
} from './styled';

export default () =>{
    return(
        <Container>
            <img src={iconeRemove} style={{width: '30px', height: '30px', cursor: 'pointer'}}/>
        </Container>
    );
}