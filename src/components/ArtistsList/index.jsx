import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles' // Estilos para la vista de artistas
import { artists } from './constants'

const ArtistsList = () => {
    const navigate = useNavigate()

    const handleArtistClick = (artistId) => {
      navigate(`/artists/${artistId}`)
    }

  return (
    <S.ArtistsList>
      {artists.map((artist) => (
        <S.ArtistCard 
        key={artist.id}
        image={artist.image}
        onClick={() => handleArtistClick(artist.id)}>

          <S.ArtistName><h3>{artist.name}</h3> </S.ArtistName>
        </S.ArtistCard>
      ))}
    </S.ArtistsList>
  )
}

export default ArtistsList
