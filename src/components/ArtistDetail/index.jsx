import React from 'react'
import { useParams } from 'react-router-dom'
import * as S from './styles' // Estilos para la vista de artistas
import { artistsData } from './constants'


const ArtistDetail = () => {
  const { slug } = useParams() // Recibe el slug desde la URL
  const artist = artistsData[slug] // Busca los datos del artista

  if (!artist) {
    return <p>Artista no encontrado</p>
  }

  return (
    <S.ArtistDetail>
      <S.LefttBox>
        <S.ArtistImage src={artist.image} alt={artist.name} />
        <S.ArtistName>{artist.name}</S.ArtistName>
        <S.SocialLinks>
          <a
            href={artist.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href={artist.socialLinks.soundcloud}
            target="_blank"
            rel="noopener noreferrer"
          >
            SoundCloud
          </a>
        </S.SocialLinks>
      </S.LefttBox>
      <S.RightBox>
      <S.ArtistBio>{artist.bio}</S.ArtistBio>
      </S.RightBox>
    </S.ArtistDetail>
  )
}

export default ArtistDetail
