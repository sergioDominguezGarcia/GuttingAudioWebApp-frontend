import styled from 'styled-components'

export const EpDetailContainer = styled.div`
  height: 100vh;
  width: calc(100% - 5vw);
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    filter: blur(5px) brightness(0.5);
    z-index: -2;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(
      0,
      0,
      0,
      0.6
    ); /* Cambia el color y la opacidad según prefieras */
    z-index: -1;
  }
  @media (max-width: 1200px) {
    width: 100vw;
    height: auto;
    margin: auto;
    /* padding: 0 10px; */
    justify-content: flex-start;
    /* border: 1px solid white; */
    &::after {
      background-color: rgba(
        0,
        0,
        0,
        0.2
      ); /* Cambia el color y la opacidad según prefieras */

    }
  }
`

export const EpContent = styled.div`
  display: flex;
  gap: 20px;
  /* margin-top: 8%; */

  /* position: relative; */
  width: 80vw;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  z-index: 1; /* Asegura que el contenido esté por encima del fondo */

  @media (max-width: 1200px) {
    width: 85vw;
    margin-top: 8vh;
    align-items: flex-start;
  }
  @media (max-width: 834px) {
    width: 100vw;

  }
`





