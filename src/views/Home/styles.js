import styled from 'styled-components'

export const Home = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`

export const Content = styled.div`
  background-image: url(${(props) => props.background});
  background-position: center;
  display: flex;
  background-attachment: scroll;
  background-size: center;
  justify-content: center;
  height: 100%;
  z-index: -1;
  width: 100%;
`

export const Releases = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* border: 5px solid red; */
  flex-direction:row; /* Permite que los elementos se envuelvan en múltiples filas */
 /* Espacio uniforme entre los elementos */
  background: rgba(255, 255, 255, 0.15);
  color: white;
  margin-top: 7rem;
  justify-content: center;
  width: 80%;
  height: 20%;
   /* Ajusta el ancho para que se adapte a su contenedor padre */
  box-sizing: border-box;
`
