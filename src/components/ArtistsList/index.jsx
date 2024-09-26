import React from 'react'
import * as S from './styles' // Estilos para la vista de artistas
import { artists } from './constants'

const ArtistsList = () => {
  return (
    <S.ArtistsList>
      {artists.map((artist) => (
        <S.ArtistCard key={artist.id}>
          <S.StyledLink to={`/artists/${artist.slug}`}>
            <S.ArtistImage src={artist.image} alt={artist.name} />
            <S.ArtistName>{artist.name}</S.ArtistName>
          </S.StyledLink>
        </S.ArtistCard>
      ))}
    </S.ArtistsList>
  )
}

export default ArtistsList
