import React, { useRef, useState, useEffect } from 'react'
import * as S from './styles'
import { AiFillSound } from 'react-icons/ai'
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
  const [volume, setVolume] = useState(1)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

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
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
    }
  }, [track])

  useEffect(() => {
    const updateProgress = () => {
      const audio = audioRef.current
      setCurrentTime(audio.currentTime)
      setDuration(audio.duration || 0)
      setProgress((audio.currentTime / audio.duration) * 100)
    }

    const audio = audioRef.current
    audio.addEventListener('timeupdate', updateProgress)

    return () => audio.removeEventListener('timeupdate', updateProgress)
  }, [])

  const handleTrackSelect = (trackId) => {
    setCurrentTrackId(trackId)
    if (!isPlaying) handlePlayPause() // Reproducir si no está ya sonando
  }

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100
    setVolume(newVolume)
    audioRef.current.volume = newVolume
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  const handleProgressClick = (e) => {
    const progressBar = e.target
    const clickPosition = e.nativeEvent.offsetX
    const newTime = (clickPosition / progressBar.clientWidth) * duration
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  return (
    <S.Container>
      <S.Cover>
        <img src={selectedEp.coverUrl} alt={selectedEp.title} />
      </S.Cover>
      <S.Info>
        <S.Tittle>{selectedEp.title || 'TEST TITLE'}</S.Tittle>
        <S.Artist>{selectedEp.artist || 'TEST ARTIST'}</S.Artist>
      </S.Info>

      <S.PlayerProgress onClick={handleProgressClick}>
        <S.ProgressBar style={{ width: `${progress}%` }}></S.ProgressBar>
        <S.MusicDuracion>
          <S.CurrentTime>{formatTime(currentTime)}</S.CurrentTime>
          <S.Duration>{formatTime(duration)}</S.Duration>
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
        <S.VolumeControl
          type="range"
          value={volume * 100}
          onChange={handleVolumeChange}
          min="0"
          max="100"
        />
      </S.Controls>

      <S.TrackList>
        <S.H2>TRACKLIST</S.H2>
        {selectedEp.tracks.map((track) => (
          <S.TrackItem
            key={track.id}
            onClick={() => handleTrackSelect(track.id)}
          >
            {track.title}
            {isPlaying && currentTrackId === track.id && (
              <AiFillSound style={{ marginLeft: '8px', color: 'green' }} />
            )}
          </S.TrackItem>
        ))}
      </S.TrackList>
      <S.StyledAudio ref={audioRef} src={track.audioUrl} />
    </S.Container>
  )
}

export default MusicPlayer
