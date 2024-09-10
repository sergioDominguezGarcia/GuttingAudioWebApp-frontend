import React from 'react'
import { usePlayer } from '../Player/PlayerContext' // Ajusta la ruta según sea necesario
import Player from '../Player' // Ajusta la ruta según sea necesario

const GlobalPlayer = () => {
  const { currentTrack } = usePlayer()

  if (!currentTrack) {
    return <div>No track selected</div>
  }

  return (
    <div>
      <Player track={currentTrack} />
    </div>
  )
}

export default GlobalPlayer
