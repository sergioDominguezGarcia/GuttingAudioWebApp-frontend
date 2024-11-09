import React, { useRef, useState, useEffect } from 'react'
import * as S from './styles'
import Black from '../../assets/Black.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay,
  faPause,
  faBackward,
  faForward,
} from '@fortawesome/free-solid-svg-icons'

const MusicPlayer = ({
  track,
  currentTrackId,
  setCurrentTrackId,
  selectedEp,
}) => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch((error) => {
        console.error('User interaction required to play audio:', error)
      })
    }
    setIsPlaying(!isPlaying)
  }

  const handlePreviousTrack = () => {
    const currentIndex = selectedEp.tracks.findIndex(
      (t) => t.id === currentTrackId
    )
    if (currentIndex > 0) {
      setCurrentTrackId(selectedEp.tracks[currentIndex - 1].id)
    }
  }

  const handleNextTrack = () => {
    const currentIndex = selectedEp.tracks.findIndex(
      (t) => t.id === currentTrackId
    )
    if (currentIndex < selectedEp.tracks.length - 1) {
      setCurrentTrackId(selectedEp.tracks[currentIndex + 1].id)
    }
  }

  useEffect(() => {
    // Pausar y reiniciar el reproductor cuando cambie de track
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false) // Evita el auto-play en el cambio de track
    }
  }, [track])

  const handleTrackSelect = (trackId) => {
    setCurrentTrackId(trackId)
  }

  return (
    <S.Container>
      <S.Cover>
        <img src={selectedEp.coverUrl} alt={selectedEp.title} />
      </S.Cover>
      <S.Tittle>{track.title || 'TEST TITLE'}</S.Tittle>
      <S.Artist>{track.artist || 'TEST ARTIST'}</S.Artist>

      <S.PlayerProgress>
        <S.ProgressBar></S.ProgressBar>
        <S.MusicDuracion>
          <S.CurrentTime>0:00</S.CurrentTime>
          <S.Duration>0:00</S.Duration>
        </S.MusicDuracion>
      </S.PlayerProgress>

      <S.Controls>
        <S.Prev onClick={handlePreviousTrack}>
          <FontAwesomeIcon icon={faBackward} />
        </S.Prev>
        <S.Play onClick={handlePlayPause}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </S.Play>
        <S.Next onClick={handleNextTrack}>
          <FontAwesomeIcon icon={faForward} />
        </S.Next>
      </S.Controls>
      <S.TrackList>
        <S.H2>TRACKLIST</S.H2>
        {selectedEp.tracks.map((track) => (
          <S.TrackItem
            key={track.id}
            onClick={() => handleTrackSelect(track.id)}
          >
            {track.title}
          </S.TrackItem>
        ))}
      </S.TrackList>
      <S.StyledAudio ref={audioRef} src={track.audioUrl} />
    </S.Container>
  )
}

export default MusicPlayer
