import styled from 'styled-components'

export const Home = styled.div`

min-height: 100vh;

  @media (max-width: 1200px) {
    margin-top: 50px;
  }
`

export const Content = styled.div`
  background-image: url(${(props) => props.background});
  background-position: center;
  background-attachment: scroll;
  background-size: cover; /* Asegura que la imagen cubra todo el contenedor */
  display: flex;
  justify-content: center;
  align-items: center; /* Opcional, alinea el contenido dentro del contenedor */
 /* Asegura que ocupe al menos el alto completo de la ventana */
  width: 100%;
 
`;

export const Artists = styled.div`
  display: flex;
  color: white;
  justify-content: 
  center;
  align-items: center;
  /* border: 1px solid rgb(221, 221, 221, 0.5); */
  width: 100vw;
  height: 100%;
  @media (max-width: 834px) {
    width: 100vw;
    padding: 0rem;
    top: 0px;
  }
`
