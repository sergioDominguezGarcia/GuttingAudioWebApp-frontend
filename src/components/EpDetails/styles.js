import styled from 'styled-components'

export const EpDetailContainer = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Fondo con la coverUrl */
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* Capa de oscuridad para mejorar la legibilidad */
  position: relative;
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
    filter: blur(8px); /* Aplicar desenfoque */
    /* z-index: -1; Colocar detrás del contenido */
    /* opacity: 0.7; Hacer que sea un poco transparente */
  }
`

export const Title = styled.h2`
  margin-bottom: 20px;
  color: white; /* Asegura que el título sea legible sobre el fondo */
`

export const EpContent = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10%;
  /* border: 1px solid yellow; */
  /* position: relative; */
  width: 80%;
  align-items: center;
  justify-content: space-around;
  z-index: 1; /* Asegura que el contenido esté por encima del fondo */
`

export const EpCover = styled.div`
  img {
    /* width: 600px; */
    height: auto;
    border-radius: 8px;
    background-repeat: space repeat;
  }
`

export const TrackList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1; /* Asegura que los tracks estén por encima del fondo */
`
