import styled from 'styled-components'

export const TrackPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;

  width: 100%;
  height: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  /* Limitar la altura máxima */
`


export const TrackTitle = styled.h4`
  font-size: 18px;
  display: flex;
  gap: 32px;
  color: #f0f0f0;
  margin: 0px 0px 0px 30px;
  align-self: self-start;
  align-items: center;
`

export const StyledAudio = styled.audio`
  width: 100%;
  /* border: 1px solid red; */
  outline: none;
  /* margin-top: 10px; */

  height: 100%;
  &::-webkit-media-controls-panel {
    background-color: rgba(0, 0, 0, 0.6
);
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


export const ProgressBar = styled.input`

  width: 90%;
  appearance: none;
  background: #444;
  height: 50px;
  border-radius: 5px;
  /* margin-top: 10px; */

  &::-webkit-slider-thumb {
    appearance: none;
    width: 12px;
    height: 12px;
    background: #ff7f50;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background: #ff7f50;
    border-radius: 50%;
    cursor: pointer;
  }
  
`

export const VolumeControl = styled.input`
  width: 100px;
  margin-top: 10px;
  appearance: none;
  background: #444;
  height: 8px;
  margin: 16px;
  position: relative;
  align-self: start;
  border-radius: 5px;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
  }
`

export const ControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 100px;
  /* border: 1px solid red; */
`

export const TimeDisplay = styled.span`
  font-size: 12px;
  color: #fff;
  
`
