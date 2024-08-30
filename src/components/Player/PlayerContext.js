import React, { createContext, useContext, useState } from 'react'

const PlayerContext = createContext()

export const PlayerProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null)

  const playTrack = (track) => {
    setCurrentTrack(track)
  }

  const pauseTrack = () => {
    setCurrentTrack(null)
  }

  return (
    <PlayerContext.Provider value={{ currentTrack, playTrack, pauseTrack }}>
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => useContext(PlayerContext)
