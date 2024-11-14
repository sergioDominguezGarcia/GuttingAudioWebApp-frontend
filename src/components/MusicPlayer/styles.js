import styled from 'styled-components'


export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgb(221, 221, 221, 0.5);
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  gap: 70px;
  margin: 0 auto;
  padding: 2rem;
  transition: all 0.5s ease;
  width: auto;
  max-width: 75%;
    @media (max-width: 1200px) {
    flex-direction: column-reverse;
    gap: 0;

  }
`
export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid white; */
  @media (max-width: 1200px) {
    width: auto;
  } 
`

export const Cover = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  /* border: 1px solid white; */
  justify-content: center;
  img {
    object-fit: cover;

    width: 400px;
    border-radius: 16px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 1200px) {
    height: 40%;
    align-items: center;
    gap: 0px;
    flex-direction: column-reverse;
    img {
      width: 330px;
      height: 200px;
    }
  }
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;  
  
`

export const Tittle = styled.h1`
  font-size: 1.7rem;
  display: flex;
  justify-content: center;
  margin: 0;
  color: rgb(221, 221, 221);
  font-family: kaneda-gothic-extrabold;
  letter-spacing: 0.09em;
  font-size: 1.6vw;
    @media (max-width: 1200px) {
    font-size: 1.4em;
    line-height: 1.2;
    padding-top: 0rem;
  }
`
export const Artist = styled.a`
  font-size: 1.4rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  color: rgb(221, 221, 221);
  font-family: kaneda-gothic-light;
  letter-spacing: 0.3em;
    @media (max-width: 1200px) {
    font-size: 1em;
    line-height: 1;
    
  }
`
export const ReleaseInfo = styled.div`
  height: 100%;
  padding-top: 1.7rem;
  padding-bottom: 1rem;
  text-align: justify;
  line-height: 1.5;
  width: 100%;
  font-size: 1.8em;
  letter-spacing: 0.06em;
  color: rgb(221, 221, 221, 0.9);
  font-family: kaneda-gothic-light;
  @media (max-width: 1200px) {
    font-size: 1.4em;
    line-height: 1.2;
    padding-top: 0rem;
  }
    @media (max-width: 480px) {
    font-size: 1em;
    line-height: 1.2em;
    padding-top: 0rem;
  }
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
export const CurrentTime = styled.span`
color: rgb(221, 221, 221);`
export const Duration = styled.span`
color: rgb(221, 221, 221);`

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`

export const Controls = styled.div`
  position: relative;
  top: -20px;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  justify-content: center;
  /* align-items: center; */
  gap: 15px;
  font-size: 1.5rem;
  color: #0009;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;

`
export const Prev = styled.i`
  color: rgb(221, 221, 221);
    &:hover {
    filter: brightness(40%);
  }
`
export const Next = styled.i`
  color: rgb(221, 221, 221);
    &:hover {
    filter: brightness(40%);
  }
`
export const Play = styled.i`
  
  color: rgb(221, 221, 221);
    &:hover {
    filter: brightness(40%);
  }
`
export const VolumeControl = styled.input`
  width: 100px;

  appearance: none;
  background-color: rgb(221, 221, 221);
  height: 8px;
  
  position: relative;

  border-radius: 5px;
    &:hover {
    filter: brightness(40%);
  }
`

export const H2 = styled.a`
  padding: 1rem;
  align-self: center;
  font-family: kaneda-gothic-extrabold;
  font-size: 1.8rem;
  letter-spacing: 0.3rem;
  color: rgb(221, 221, 221);
  @media (max-width: 1200px) {
    
    font-size: 1.3em;
    
  }
`
export const TrackList = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0px 10px 10px 10px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  @media (max-width: 1200px) {
    width: 100%;
    font-size: 0.8em;
    width: 100%;
    padding: 0px;
  }
  /* border-top: 1px solid gray; */
`
export const TrackItem = styled.div`
  cursor: pointer;
  gap: 6px;
  color: rgb(221, 221, 221);
  padding: 10px;
  gap:1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-family: kaneda-gothic-light;
  font-size: 1.6em;
  letter-spacing: 0.1em;
  &:hover {
    background-color: rgba(186, 186, 186, 0.5);
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

