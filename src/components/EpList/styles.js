import styled from 'styled-components'

// Contenedor de la cuadrícula para los EPs
export const EpGrid = styled.div`
  display: flex;
    
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-bottom:1rem;
  width: 80%;
  /* height: auto; */
  box-sizing: border-box;
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
`
// Cada tarjeta de EP (card)
export const EpCard = styled.div`
  position: relative; /* Aseguramos que el Overlay se posicione sobre esta tarjeta */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease, box-shadow 0.3s ease;
  background-image: url(${(props) => props.coverUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }

  &:hover ${Overlay} {
    opacity: 1; /* Hacemos visible el overlay al hacer hover */
  }
  /* Ajustes responsivos */

  @media (max-width: 1024px) {
    max-width: 250px; /* Reducimos el tamaño en pantallas medianas */
    max-height: 250px;
  }
  @media (max-width: 768px) {
    max-width: 200px; /* Reducimos el tamaño en pantallas medianas */
    max-height: 200px;
  }

  @media (max-width: 480px) {
    max-width: 165px; /* Reducimos el tamaño en pantallas medianas */
    max-height: 165px;
    border-radius: 4px; /* Redondeo menor en dispositivos pequeños */
  }
`

// Superposición (overlay) que oscurece la tarjeta y muestra el icono de play

// Icono de play
export const PlayIcon = styled.div`
  font-size: 6em;
  color: rgba(255, 255, 255, 0.772);
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
  color: white;
  text-align: center;
  padding: 10px;

  h3 {
    margin: 0;
    font-size: 1.2em;
  }

  p {
    margin: 5px 0 0;
    font-size: 0.9em;
  }

  @media (max-width: 1024px) {
    h3 {
      margin: 0;
      font-size: 1em;
    }

    p {
      margin: 5px 0 0;
      font-size: 0.8em;
    }
  }
  @media (max-width: 768px) {
    h3 {
      margin: 0;
      font-size: 0.8em;
    }

    p {
      margin: 5px 0 0;
      font-size: 0.7em;
    }
  }

  @media (max-width: 480px) {
    h3 {
      margin: 0;
      font-size: 0.8em;
    }

    p {
      margin: 5px 0 0;
      font-size: 0.7em;
    } 
  }
`
