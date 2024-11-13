import styled from 'styled-components'


export const Container = styled.div`
  margin: 0 auto;
  background-color: darkgrey;
  padding: 1rem;
  background-color: rgba(118, 118, 118, 0.75);
  /* height: 450px; */
  width: 500px;
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
  }
`
export const Cover = styled.div`
  display: flex;
  padding: 16px 16px 0px 16px;
  justify-content: center;
  img {
    object-fit: cover;

    width: 400px;
    border-radius: 6%;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;  
`

export const Tittle = styled.h2`
  font-size: 1.7rem;
  display: flex;
  justify-content: center;


`
export const Artist = styled.a`
  font-size: 1.2rem;
  font-weight: 700;
  display: flex;
  justify-content: center;

`
export const PlayerProgress = styled.div`
  background-color: #f0f0f0;
  border-radius: 5px;
  cursor: pointer;
  margin: 40px 20px 35px;
  width: 90%;
  height: 5px;
`
export const ProgressBar = styled.div`
  background-color: #444;
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
  /* font-size: 2rem; */

`
export const VolumeControl = styled.input`
  width: 100px;
  margin-top: 10px;
  appearance: none;
  background: #444;
  height: 8px;
  margin-left: 46px;
  position: relative;
  align-self: start;
  border-radius: 5px;
`

export const H2 = styled.h2`
  align-self: center;
  font-size: 1.5rem;
  color: #333;
`
export const TrackList = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0px 10px 10px 10px ;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  /* border-top: 1px solid gray; */
`
export const TrackItem = styled.div`
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  &:hover {
    background-color: #4f4f4f6c;
  }
`

export const StyledAudio = styled.audio`
  width: 100%;
  margin-top: 10px;
  &::-webkit-media-controls-panel {
    background-color: rgba(0, 0, 0, 0.3);
    border: none;
  }
  &::-webkit-media-controls-play-button {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    margin-left: 40px;
    margin-right: 20px;
    width: 100%;
  }
  &::-webkit-media-controls-current-time-display,
  &::-webkit-media-controls-time-remaining-display {
    color: #f0f0f0;
    font-size: 16px;
  }
`

