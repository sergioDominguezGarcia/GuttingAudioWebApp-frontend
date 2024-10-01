import styled from 'styled-components'

export const Content = styled.div`
  position: relative; /* Importante para el posicionamiento adecuado */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
  z-index: 1; /* Mantén un z-index mayor para que esté encima del carrusel */
  overflow: hidden;

`

export const Releases = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.3); /* Fondo oscuro semitransparente */
  color: white;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  justify-content: space-around;
  padding-top: 10rem;
`

