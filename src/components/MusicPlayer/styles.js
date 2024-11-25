import styled from 'styled-components'

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgb(221, 221, 221, 0.5);
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  gap: 70px;
  margin: 0 auto;
  padding: 2rem;
  transition: all 0.5s ease;
  width: auto;
  /* max-width: 75%; */
  border: 1px solid white;
  
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 0px;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0);
    padding: 1rem;
    border: none;
    top: 0;
    height: 150vh;
  }
`
export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid white; */
  @media (max-width: 1200px) {
    width: 100%;
    height: 100%;
    align-self: center;
  }
  /* Reorganiza el orden de los elementos en esta resolución */
  & > div:nth-child(1) {
    order: 1; /* <S.ReleaseInfo> en tercer lugar */
  }

  & > div:nth-child(2) {
    order: 2; /* <S.TrackList> en segundo lugar */
  }

  & > div:nth-child(3) {
    order: 1; /* <S.Info> en primer lugar */
  }
  & > div:nth-child(4) {
    order: 1; /* <S.Icons> en segundo lugar */
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
    /* border-radius: 16px; */
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 1200px) {
    /* height: 40%; */
    align-items: center;
    gap: 0px;
    flex-direction: column;

    img {
      width: 100%;
      max-height: 250px;
    }
  }
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2vh;
  @media (max-width: 1200px) {
    margin-bottom: 2vh;
  }
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
    font-size: 1.8em;
    line-height: 1.3;
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
    font-size: 1.5em;
    line-height: 1;
  }
`
export const PlayerProgress = styled.div`
  background-color: #f0f0f0;
  border-radius: 5px;
  cursor: pointer;
  margin: 40px 20px 35px;
  width: 90%;
  height: 5px;
  @media (max-width: 480px) {
    margin: 25px 20px 15px;
  }
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
  font-size: 1rem;
`
export const CurrentTime = styled.span`
  color: rgb(221, 221, 221);
`
export const Duration = styled.span`
  color: rgb(221, 221, 221);
`
export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
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
  font-size: 1.8rem;
  color: #0009;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
  @media (max-width: 1200px) {
    top: 16px;
  }
`
export const Prev = styled.i`
  color: rgb(221, 221, 221);
  &:active {
    filter: brightness(40%);
  }
`
export const Next = styled.i`
  color: rgb(221, 221, 221);
  &:active {
    filter: brightness(40%);
  }
`
export const Play = styled.i`
  color: rgb(221, 221, 221);
  &:active {
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

  @media (max-width: 1200px) {
    height: 4px;
    display: none;
  }

  &:hover {
    filter: brightness(40%);
  }
`
export const ReleaseInfo = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 0rem;
  padding-bottom: 1rem;
  text-align: justify;
  line-height: 1.5;
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
    font-size: 1.4em;
    line-height: 1em;
    padding-top: 0rem;
    align-self: center;
    width: 100%;
  }
`
export const TrackList = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px;
  /* border-radius: 8px; */
  background-color: rgba(255, 255, 255, 0.2);
  @media (max-width: 1200px) {
    width: 100%;
    font-size: 0.8em;
    padding: 0px;
    /* height: 40%; */
  }
  /* border-top: 1px solid gray; */
`
export const TrackItem = styled.div`
  cursor: pointer;
  gap: 6px;
  color: rgb(221, 221, 221);
  padding: 10px;
  gap: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-family: kaneda-gothic-light;
  font-size: 1.6em;
  letter-spacing: 0.1em;
  &:active {
    background-color: rgba(186, 186, 186, 0.5);
  }
`

export const Icons = styled.div`
  border-top: 1px solid rgb(221, 221, 221, 0.3);
  padding: 12px 8px 6px 8px;
  display: flex;

  justify-content: flex-start;
  gap: 18px;
  @media (max-width: 1200px) {
    padding: 16px 8px;
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
