import styled from 'styled-components'

export const EpDetailContainer = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  box-sizing: border-box;
  /* padding-bottom: 100px; */
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
    filter: blur(8px);
  }
`
export const TrackItem = styled.div`
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`
export const Title = styled.h2`
  /* margin-bottom: 20px; */
  color: white; 
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
  z-index: 1;
  flex-grow: 1; /* Para que el contenido principal ocupe el espacio restante */
  overflow-y: auto;
`
