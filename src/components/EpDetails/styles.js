import styled from 'styled-components'

export const EpDetailContainer = styled.div`
  height: 100vh;
  width: calc(100% - 5vw);
  margin: 75px auto;
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
`
export const TrackItem = styled.div`
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
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
  margin-top: 8%;
  /* border: 1px solid yellow; */
  /* position: relative; */
  width: 80%;
  
  align-items: center;
  justify-content: space-around;
  z-index: 1; /* Asegura que el contenido esté por encima del fondo */
`

export const EpCover = styled.div`

  background: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  img {
    max-width: 500px;
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
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
  color: #F0F0F0;
  font-size: 24px;
`

export const Info = styled.div`
  color: white;
  width: 30%;
  max-height: 670px;
  padding: 10px 30px 15px 30px;
  font-size: 1.1em;
  color: #f1f1f0;
  line-height: 30px;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
`
export const PlayerContainer = styled.div`
  /* border: 1px solid yellow; */
  width: 100%;
  background-color: black;
  /* position: fixed; */
  /* bottom: 0px; */
  padding: 15px;
  
  height: 100%;
  max-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`