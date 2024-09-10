// PlayerContext.js
import React, { createContext, useState, useContext } from 'react'

const PlayerContext = createContext()

export const PlayerProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // PlayerContext.js
  const playTrack = (track) => {
    console.log('Playing track:', track) // Verifica qué pista se está pasando
    setCurrentTrack(track)
    setIsPlaying(true)
  }

  const pauseTrack = () => {
    setIsPlaying(false)
  }

  return (
    <PlayerContext.Provider
      value={{ currentTrack, isPlaying, playTrack, pauseTrack }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => useContext(PlayerContext)
