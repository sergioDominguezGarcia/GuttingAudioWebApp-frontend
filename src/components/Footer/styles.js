import styled from 'styled-components';

export const Footer = styled.div`
  background-color: black;
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #fff;
  font-size: 0.5vw;
  justify-content: center; /* Cambiado a 'center' */
 
  padding: 10px 10px;
  font-family: monospace;

  @media (max-width: 880px) {
    font-size: 1.6vw;
    justify-content: center;
   
  }
`;
