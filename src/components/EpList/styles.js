import styled from 'styled-components'

// Contenedor de la cuadrícula para los EPs
export const EpGrid = styled.div`
  display: flex;  
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  gap: 0.9vw;
  margin-bottom:1rem;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 834px) {
    gap: 3.5vw;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  @media (max-width: 1200px) {
    background-color: rgba(0, 0, 0, 0.2);
  }
`
// Cada tarjeta de EP (card)
export const EpCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  /* border-radius: 8px; */
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-image: url(${(props) => props.coverUrl});
  background-size: cover;
  background-position: center;
  width: 23vw;
  height: 23vw;
  transition: transform 0.5s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
  &:hover ${Overlay} {
    opacity: 1;
  }
  @media (max-width: 1200px) {
    width: 29vw;
    height: 29vw;
    &:hover {
      transform: none; /* Desactiva el movimiento */
      box-shadow: none; /* Elimina la sombra */
    }
    /* border-radius: 4px; */
  }
  @media (max-width: 932px) {
    width: 45vw;
    height: 45vw;
    /* border-radius: 4px; */
  }
`


// Icono de play
export const PlayIcon = styled.div`
  font-size: 6em;
  color: rgba(255, 255, 255, 0.772);
  @media (max-width: 932px){
    font-size: 3em;
  };
`
// Contenedor para el título y el artista
export const EpInfo = styled.div`
  width: 100%;
  height: auto;
  background: rgba(
    0,
    0,
    0,
    0.6
  ); /* Fondo semitransparente para destacar el texto */
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 10px;
  /* margin-left: 2rem;
  margin-right: 2rem; */
  h3 {
    font-family: kaneda-gothic-extrabold;
    letter-spacing: 0.09em;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    font-size: 1.3vw;
    gap: 2.5em;
    text-shadow: 1px 1px 2px black;
  }
  p {
    font-family: 'kaneda-gothic-light';
    margin: 0;
    font-size: 1.0vw;
    letter-spacing: 0.13em;
    text-shadow: 1px 1px 2px black;
  }

  @media (max-width: 1200px) {
    h3 {
      font-family: kaneda-gothic-extrabold;
      letter-spacing: 0.09em;
      margin: 0;
      font-size: 1.7vw;
      gap: 2.5em;
      text-shadow: 1px 1px 2px black;
    }
    p {
      font-family: 'kaneda-gothic-light';
      margin: 0;
      font-size: 1.3vw;
      letter-spacing: 0.13em;
      text-shadow: 1px 1px 2px black;
    }
  }
  @media (max-width: 834px) {
    h3 {
      font-family: kaneda-gothic-extrabold;
      letter-spacing: 0.09em;
      margin: 0;
      font-size: 3.4vw;
      gap: 2.5em;
      text-shadow: 1px 1px 2px black;
    }
    p {
      font-family: 'kaneda-gothic-light';
      margin: 0;
      font-size: 2.6vw;
      letter-spacing: 0.13em;
      text-shadow: 1px 1px 2px black;
    }
  }
`
export const EpInfo2 = styled.div`
  display: flex;
  top: -0.7vw;
  right: 0.3vw;

  text-shadow: 1px 1px 2px black;
  position: absolute;
  /* font-size: 1.35em; */
  font-size: 0.9vw;
  letter-spacing: 0.1em;
  width: 100%;
  height: 1em;
  font-family: 'kaneda-gothic-extrabold';

  justify-content: flex-end;

  @media (max-width: 1200px) {
    font-size: 1vw;
  }
  @media (max-width: 834px) {
    font-size: 2vw;
    top: -1.7vw;
    right: 0.6vw;
  }
`
