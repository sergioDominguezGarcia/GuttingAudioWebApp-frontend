import React from 'react'
import styled from 'styled-components'
import { usePlayer } from '../Player/PlayerContext'

const FixedPlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #282c34;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.5);
`

const TrackInfo = styled.div`
  display: flex;
  align-items: center;
`

const AlbumCover = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 5px;
  object-fit: cover;
`

const AudioControls = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`

const AudioPlayer = styled.audio`
  width: 100%;
`

const GlobalPlayer = () => {
  const { currentTrack } = usePlayer()

  return (
    currentTrack && (
      <FixedPlayerContainer>
        <TrackInfo>
          <AlbumCover
            src={currentTrack.album_image}
            alt={`${currentTrack.album} cover`}
          />
          <div>
            <h4>{currentTrack.name}</h4>
            <p>{currentTrack.artist}</p>
          </div>
        </TrackInfo>
        <AudioControls>
          <AudioPlayer controls autoPlay>
            <source src={currentTrack.preview_url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </AudioPlayer>
        </AudioControls>
      </FixedPlayerContainer>
    )
  )
}

export default GlobalPlayer
