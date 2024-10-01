import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { eps } from '../../constants/constants' // Importa el array de constants.js
import TrackPlayer from '../TrackPlayer' 
import * as S from './styles'

const EpDetail = () => {
  const { epId } = useParams() // Obtener el ID del EP desde la URL
  const [selectedEp, setSelectedEp] = useState(null)
  const [currentTrackId, setCurrentTrackId] = useState(null) // Para controlar qué track está sonando

  useEffect(() => {
    const ep = eps.find((ep) => ep.id === epId) // Buscar el EP por su ID
    setSelectedEp(ep)
  }, [epId])

  if (!selectedEp) return <div>Loading...</div>

  return (
    <S.EpDetailContainer>
      <S.Title>{selectedEp.title}</S.Title>
      <S.EpContent>
        <S.EpCover>
          <img src={selectedEp.coverUrl} alt={selectedEp.title} />
        </S.EpCover>

        <S.TrackList>
          {selectedEp.tracks.map((track) => (
            <TrackPlayer
              key={track.id}
              track={track}
              currentTrackId={currentTrackId}
              setCurrentTrackId={setCurrentTrackId}
            />
          ))}
        </S.TrackList>
      </S.EpContent>
    </S.EpDetailContainer>
  )
}

export default EpDetail
