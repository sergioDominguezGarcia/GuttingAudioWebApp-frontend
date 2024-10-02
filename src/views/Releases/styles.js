import styled from 'styled-components'

export const Content = styled.div`
  position: relative; /* Importante para el posicionamiento adecuado */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  z-index: 1; /* Mantén un z-index mayor para que esté encima del carrusel */
  overflow: hidden;
`

export const Releases = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.4);
  /* backdrop-filter: blur(10px);
  opacity: 0.95; */
  color: white;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  justify-content: space-around;
  padding-top: 10rem;
`

