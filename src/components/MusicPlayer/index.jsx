import React, { useRef, useState, useEffect } from 'react'
import * as S from './styles'
import { AiFillSound } from 'react-icons/ai'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay,
  faPause,
  faBackward,
  faForward,
  faShare,
  faCartShopping,
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
      const previousTrackId = selectedEp.tracks[currentIndex - 1].id
      setCurrentTrackId(previousTrackId)
      setIsPlaying(true) // Iniciar reproducción automáticamente
    }
  }

  const handleNextTrack = () => {
    const currentIndex = selectedEp.tracks.findIndex(
      (t) => t.id === currentTrackId
    )
    if (currentIndex < selectedEp.tracks.length - 1) {
      const nextTrackId = selectedEp.tracks[currentIndex + 1].id
      setCurrentTrackId(nextTrackId)
      setIsPlaying(true) // Iniciar reproducción automáticamente
    }
  }

  const handleTrackSelect = (trackId) => {
    setCurrentTrackId(trackId)
    setIsPlaying(true) // Asegurarse de que el track seleccionado se reproduce automáticamente
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error('Error playing audio:', error)
        })
      }
    }
  }, [currentTrackId, isPlaying])

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

  const handleShare = (track) => {
    const shareUrl = track.shareUrl || window.location.href
    navigator.share
      ? navigator.share({
          title: `Check out this track: ${track.title}`,
          url: shareUrl,
        })
      : alert(`Share this link: ${shareUrl}`)
  }

  const handlePurchase = () => {
    const purchaseUrl = selectedEp.purchaseUrl || '#'
    window.open(purchaseUrl, '_blank')
  }

  return (
    <S.Container>
      <S.Cover>
        <img src={selectedEp.coverUrl} alt={selectedEp.title} />
        <S.ControlsContainer>
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
        </S.ControlsContainer>
      </S.Cover>
      <S.Contain>
        <S.Info>
          <S.Tittle>{selectedEp.title || 'TEST TITLE'}</S.Tittle>
          <S.Artist>{selectedEp.artist || 'TEST ARTIST'}</S.Artist>
        </S.Info>
        <S.ReleaseInfo>
          <p>
            Let's pick up the pace again! Here is our new reference produced by
            another newcomer in our family, Moderate Hate. He presents us with
            two completely different tracks, showing us his great repertoire of
            ideas. Gate delves into the fusion with psy styles creating an
            incredible atmosphere and rhythm and 4AM shows us his best known
            side in the world of Drum & Bass.
          </p>
        </S.ReleaseInfo>
        <S.TrackList>
          {selectedEp.tracks.map((track) => (
            <S.TrackItem key={track.id}>
              {/* Play/Pause icon */}
              <S.Play onClick={() => handleTrackSelect(track.id)}>
                <FontAwesomeIcon
                  icon={
                    currentTrackId === track.id && isPlaying ? faPause : faPlay
                  }
                />
              </S.Play>
              {/* Track title */}
              {track.title}
              {/* Sound icon when track is playing */}
              {/* {isPlaying && currentTrackId === track.id && (
                <AiFillSound
                  style={{
                    marginTop: '4px',
                    marginLeft: '8px',
                    color: 'red',
                  }}
                />
              )} */}
            </S.TrackItem>
          ))}

          <S.Icons>
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{
                cursor: 'pointer',
                color: '#ddd',
                height: '1.3em',
              }}
              onClick={() => handlePurchase(track)}
            />

          
            <FontAwesomeIcon
              icon={faShare}
              style={{
                cursor: 'pointer',
                color: '#ddd',
                height: '1.3em',
              }}
              onClick={() => handleShare(track)}
            />

          </S.Icons>
        </S.TrackList>


        <S.StyledAudio ref={audioRef} src={track.audioUrl} />
      </S.Contain>
    </S.Container>
  )
}

export default MusicPlayer
