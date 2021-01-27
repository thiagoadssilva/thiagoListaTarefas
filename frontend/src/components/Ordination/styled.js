import styled from 'styled-components';

export const Container = styled.span`
`;

export const FaSortContainer = styled.span`
    display: ${props => !props.faSorteAsc && !props.faSorteDesc ? 'block' : 'none'};
`;

export const FaSortUpContainer = styled.span`
    display: ${props => props.faSorteUpAsc  ? 'block' : 'none'};
`;

export const FaSortDownContainer = styled.span`
    display: ${props => props.faSorteDownDesc  ? 'block' : 'none'};
`;