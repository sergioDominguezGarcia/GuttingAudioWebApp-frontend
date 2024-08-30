import React from 'react'
import styled from 'styled-components'
import { usePlayer } from './PlayerContext'
import { FaPlay, FaPause } from 'react-icons/fa' // Para iconos de reproducción y pausa

const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  width: 14rem;
  
  flex-direction: column;
  background-color: #282828d4;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`

const AlbumCover = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  border-radius: 8px;
  object-fit: cover;
`

const TrackInfo = styled.div`
  flex-grow: 1;
  color: #e0e0e0;
  margin-bottom: 10px;
`

const TrackTitle = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
`

const TrackArtist = styled.p`
  margin: 0;
  font-size: 14px;
  color: #b3b3b3;
`

const PlayButton = styled.button`
  background-color: #9eada3;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #858e88;
  }

  &:focus {
    outline: none;
  }
`

const Player = ({ track }) => {
  const { playTrack, isPlaying, currentTrack } = usePlayer()

  const handlePlayPause = () => {
    playTrack(track)
  }

  return (
    <PlayerContainer>
      <AlbumCover src={track.album_image} alt={`${track.album} cover`} />
      <TrackInfo>
        <TrackTitle>{track.name}</TrackTitle>
        <TrackArtist>{track.artist}</TrackArtist>
      </TrackInfo>
      <PlayButton onClick={handlePlayPause}>
        {currentTrack === track && isPlaying ? <FaPause /> : <FaPlay />}
      </PlayButton>
    </PlayerContainer>
  )
}

export default Player
