import React, { useRef, useState, useEffect } from 'react'
import * as S from './styles'

const TrackPlayer = ({ track, currentTrackId, setCurrentTrackId }) => {
  const audioRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    if (!track || !track.id) return

    // Pausar y reiniciar el reproductor cuando cambie de track
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      audioRef.current.load() // Cargar el nuevo track
      audioRef.current.play() // Reproducir el nuevo track
    }
  }, [track]) // Ejecutar cuando el track cambie

  const handlePlay = () => {
    if (track) {
      setCurrentTrackId(track.id)
      audioRef.current.play()
    }
  }

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime
    const total = audioRef.current.duration
    setCurrentTime(current)
    setDuration(total)
    setProgress((current / total) * 100)
  }

  const handleProgressChange = (e) => {
    const newProgress = e.target.value
    const newTime = (newProgress / 100) * audioRef.current.duration
    audioRef.current.currentTime = newTime
    setProgress(newProgress)
  }

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100
    setVolume(newVolume)
    audioRef.current.volume = newVolume
  }

  if (!track || !track.id) {
    return <div>Selecciona una pista para reproducir.</div>
  }

  return (
    <S.TrackPlayerContainer>
      <S.TrackTitle>{track.title}</S.TrackTitle>

      <S.StyledAudio
        ref={audioRef}
        controls
        onPlay={handlePlay}
        onTimeUpdate={handleTimeUpdate}
      >
        <source src={track.audioUrl} type="audio/mp3" />
        Your browser does not support the audio element.
      </S.StyledAudio>

      <S.ProgressBar
        type="range"
        value={progress}
        onChange={handleProgressChange}
        min="0"
        max="100"
      />

      <S.ControlContainer>
        <S.TimeDisplay>
          {Math.floor(currentTime / 60)}:
          {('0' + Math.floor(currentTime % 60)).slice(-2)}
        </S.TimeDisplay>

        <S.VolumeControl
          type="range"
          value={volume * 100}
          onChange={handleVolumeChange}
          min="0"
          max="100"
        />

        <S.TimeDisplay>
          {Math.floor(duration / 60)}:
          {('0' + Math.floor(duration % 60)).slice(-2)}
        </S.TimeDisplay>
      </S.ControlContainer>
    </S.TrackPlayerContainer>
  )
}

export default TrackPlayer
