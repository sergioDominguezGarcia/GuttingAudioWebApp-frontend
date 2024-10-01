import styled from 'styled-components'

export const TrackPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #2d2d2d; */
  
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 700px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`

export const TrackTitle = styled.h4`
  font-size: 18px;
  color: #fff;
  margin-bottom: 10px;
`

export const StyledAudio = styled.audio`
  width: 100%;
  outline: none;
  margin-top: 10px;
  background-color: #1f1f1f;
  border-radius: 5px;

  &::-webkit-media-controls-panel {
    background-color: #1f1f1f;
  }

  &::-webkit-media-controls-play-button,
  &::-webkit-media-controls-current-time-display,
  &::-webkit-media-controls-time-remaining-display {
    color: #fff;
  }
`

export const ProgressBar = styled.input`
  width: 100%;
  appearance: none;
  background: #444;
  height: 5px;
  border-radius: 5px;
  margin-top: 10px;

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
  height: 5px;
  border-radius: 5px;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 10px;
    height: 10px;
    background: #ff7f50;
    border-radius: 50%;
    cursor: pointer;
  }
`

export const ControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`

export const TimeDisplay = styled.span`
  font-size: 12px;
  color: #fff;
`
