import React, { createContext, useContext, useState } from 'react'

// Crear un contexto para el reproductor
const PlayerContext = createContext()

// Proveedor del contexto
export const PlayerProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null)

  const playTrack = (track) => {
    setCurrentTrack(track)
  }

  return (
    <PlayerContext.Provider value={{ currentTrack, playTrack }}>
      {children}
    </PlayerContext.Provider>
  )
}

// Hook para usar el contexto
export const usePlayer = () => useContext(PlayerContext)
