import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: column;
  background-color: #EBF1C5;
`;

export const  ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  left: 0;
  top: 0;
  background-color: #2EA2A7;
  
`;
export const  ContainerSearchRegister = styled.div`
  display: flex;
  align-items: center;
  height: 60px; 
  margin: 15px;
  background-color: #2EA2A7;
  border-radius: 10px;
`;
export const  ContainerGridTask  = styled.div`
  margin: 15px;
  flex: 1;
  background-color: #2EA2A7;
`;

export const HeaderTitle = styled.label`
  flex: 1;
  font-size: 30px;
  margin: 15px;
  font-weight: bold;
`;