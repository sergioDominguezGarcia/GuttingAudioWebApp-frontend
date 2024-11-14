import styled from 'styled-components';

export const Footer = styled.div`
  background-color: black;
  display: flex;
  position: relative;
  width: 100%;
  color: #fff;
  font-size: 0.5vw;
  justify-content: center;
  padding: 10px 0; /* Cambiado para evitar desbordamiento horizontal */
  font-family: monospace;
  margin-top: auto;
  box-sizing: border-box; /* Asegura que el padding no se agregue al ancho total */

  @media (max-width: 880px) {
    font-size: 1.6vw;
    justify-content: center;
  }
`;
