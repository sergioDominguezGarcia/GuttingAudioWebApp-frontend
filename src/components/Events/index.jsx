import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles' // Estilos para la vista de artistas
import { artists } from './constants'

const Events = () => {
    const navigate = useNavigate()

    const handleArtistClick = (artistId) => {
      navigate(`/artists/${artistId}`)
    }

  return (
    <S.EventList>
      {artists.map((artist) => (
        <S.EventCard 
        key={artist.id}
        image={artist.image}
        onClick={() => handleArtistClick(artist.id)}>

          <S.EvenTitle><h3>{artist.name}</h3> </S.EvenTitle>
        </S.EventCard>
      ))}
    </S.EventList>
  )
}

export default Events
