import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

// Estilos personalizados
const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121212;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  width: 100%;
`

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
`

const ProgressBar = styled.input`
  width: 100%;
  margin: 0 1rem;
  -webkit-appearance: none;
  background: #333;
  height: 8px;
  border-radius: 5px;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ff5500;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ff5500;
    cursor: pointer;
  }
`

const VolumeControl = styled.input`
  -webkit-appearance: none;
  width: 100px;
  margin-top: 1rem;
  background: #333;
  height: 8px;
  border-radius: 5px;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ff5500;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ff5500;
    cursor: pointer;
  }
`

const PlayButton = styled.button`
  background-color: #ff5500;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #e04d00;
  }
`

const SkipButton = styled.button`
  background-color: #ff5500;
  color: #fff;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #e04d00;
  }
`

const AudioPlayer = ({ playlistUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(50) // Valor inicial del volumen
  const iframeRef = useRef(null)
  const widgetRef = useRef(null)

  useEffect(() => {
    const loadWidgetScript = () => {
      const script = document.createElement('script')
      script.src = 'https://w.soundcloud.com/player/api.js'
      script.onload = () => {
        widgetRef.current = window.SC.Widget(iframeRef.current)
        widgetRef.current.bind(window.SC.Widget.Events.READY, () => {
          console.log('Widget ready')
          widgetRef.current.bind(window.SC.Widget.Events.PLAY_PROGRESS, (e) => {
            setProgress((e.relativePosition || 0) * 100)
          })
        })
      }
      document.body.appendChild(script)
    }

    loadWidgetScript()

    return () => {
      const script = document.querySelector(
        'script[src="https://w.soundcloud.com/player/api.js"]'
      )
      if (script) {
        document.body.removeChild(script)
      }
    }
  }, [playlistUrl])

  const togglePlayPause = () => {
    if (widgetRef.current) {
      if (isPlaying) {
        widgetRef.current.pause()
      } else {
        widgetRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleProgressChange = (event) => {
    const newValue = event.target.value
    setProgress(newValue)
    if (widgetRef.current) {
      const newTime = (newValue / 100) * widgetRef.current.getDuration()
      widgetRef.current.seekTo(newTime)
    }
  }

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value
    setVolume(newVolume)
    if (widgetRef.current) {
      widgetRef.current.setVolume(newVolume)
    }
  }

  const skipForward = () => {
    if (widgetRef.current) {
      widgetRef.current.next()
    }
  }

  const skipBackward = () => {
    if (widgetRef.current) {
      widgetRef.current.prev()
    }
  }

  return (
    <PlayerContainer>
      <iframe
        ref={iframeRef}
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
          playlistUrl
        )}&color=%2314161d&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true`}
      ></iframe>
      <ControlsContainer>
        <SkipButton onClick={skipBackward}>⏮</SkipButton>
        <PlayButton onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </PlayButton>
        <SkipButton onClick={skipForward}>⏭</SkipButton>
      </ControlsContainer>
      <ProgressBar
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleProgressChange}
      />
      <VolumeControl
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
      />
    </PlayerContainer>
  )
}

export default AudioPlayer
