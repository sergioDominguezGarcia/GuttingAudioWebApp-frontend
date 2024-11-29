import React from 'react'
import { useParams } from 'react-router-dom'
import * as S from './styles'
import { artistsData } from './constants' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import eps from "../../data/eps.json"


const ArtistDetail = () => {

  
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  const { slug } = useParams() // Recibe el slug desde la URL
  const artist = artistsData[slug] // Busca los datos del artista

  if (!artist) {
    return <p>Artista no encontrado</p>
  }
  const filteredEps = eps.filter(
    (ep) => ep.artist.toLowerCase() === artist.name.toLowerCase() // Comparación en minúsculas
  )

  return (
    <S.ArtistDetail>
      <S.LefttBox>
        <S.ArtistImage src={artist.image} alt={artist.name} />
        <S.Releases>          
            <h3>Releases:</h3>
            {filteredEps.map((ep) => (
              <S.EpCover key={ep.id}>
                <img
                  src={ep.coverUrl}
                  alt={`Portada de ${ep.title}`}
                  style={{ width: '20%', height: 'auto'}}
                />
              <h3>{ep.title}</h3>
              </S.EpCover>
            ))}
        </S.Releases>
      </S.LefttBox>
      <S.RightBox>
        <S.ArtistName>
          {' '}
          <h3>{artist.name}</h3>
        </S.ArtistName>
        <S.SocialLinks>
          <FontAwesomeIcon
            onClick={() => openLink(artist.socialLinks.instagram)}
            icon={faInstagram}
            style={{
              cursor: 'pointer',
              height: '4rem',
            }}
          />
          <FontAwesomeIcon
            onClick={() => openLink(artist.socialLinks.soundcloud)}
            icon={faSoundcloud}
            style={{
              cursor: 'pointer',
              height: '4rem',
            }}
          />
        </S.SocialLinks>
        <S.ArtistBio>
          {' '}
          <p>{artist.bio}</p>{' '}
        </S.ArtistBio>
      </S.RightBox>
    </S.ArtistDetail>
  )
}

export default ArtistDetail
