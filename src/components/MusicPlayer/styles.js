import styled from 'styled-components'
import Black from '../../assets/Black.png'
export const Container = styled.div`
  margin: 0 auto;
  background-color: darkgrey;
  padding: 1rem;
  height: 450px;
  width: 350px;
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
  }
`
export const Cover = styled.div`
  img {
    object-fit: cover;
    height: 200px;
    width: 200px;
    border-radius: 25%;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`



export const Tittle = styled.h2`
  font-size: 1.5rem;
`
export const Artist = styled.h3`
  font-size: 1rem;
`
export const PlayerProgress = styled.div`
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin: 40px 20px 35px;
  width:90%;
  height: 5px;


`
export const ProgressBar = styled.div`
  background-color: #212121;
  border-radius: 5px;
  width: 0%;
  height: 100%;
  transition: width 0.1s linear;
`
export const MusicDuracion = styled.div`
  position: relative;
  top: -30px;
  display: flex;
  justify-content: space-between;


`
export const CurrentTime = styled.span``
export const Duration = styled.span``


export const Controls = styled.div`
  position: relative;
  top: -20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 1.5rem;
  color: #0009;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
  &:hover {
    filter: brightness(40%);
  }
`
export const Prev = styled.i`

`
export const Next = styled.i`

`
export const Play = styled.i`
  font-size: 2rem;

`
