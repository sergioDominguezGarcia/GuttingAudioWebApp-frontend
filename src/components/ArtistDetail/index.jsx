import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { artistsData } from './constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import eps from "../../data/eps.json"
import videos from '../../data/videos.json'
const ArtistDetailview = () => {
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

  // Filtrar videos asociados al artista (por tags)
  const filteredVideos = videos.filter((video) =>
    video.tags.some((tag) => tag.toLowerCase() === artist.name.toLowerCase())
  )

  return (
    <ArtistDetail>
      <Header>
        <h3>{artist.name}</h3>
        <hr />
      </Header>
      <Content>
        <LeftBox>
          <ArtistImage src={artist.image} alt={artist.name} />
          <Releases className="desktop-releases">
            {filteredEps.length > 0 && <ReleasesTitle>Releases</ReleasesTitle>}
            {filteredEps.map((ep) => (
              <EpCover key={ep.id}>
                <img
                  src={ep.coverUrl}
                  alt={`Portada de ${ep.title}`}
                  style={{ width: '20%', height: 'auto' }}
                />
              </EpCover>
            ))}
          </Releases>
        </LeftBox>


        <RightBox>
  <ArtistBio>
    <p>{artist.bio}</p>
  </ArtistBio>
  <SocialLinks>
    <FontAwesomeIcon
      onClick={() => openLink(artist.socialLinks.instagram)}
      icon={faInstagram}
      style={{ cursor: 'pointer', height: '2rem' }}
    />
    <FontAwesomeIcon
      onClick={() => openLink(artist.socialLinks.soundcloud)}
      icon={faSoundcloud}
      style={{ cursor: 'pointer', height: '2rem' }}
    />
  </SocialLinks>

  <Releases className="mobile-releases">
    {filteredEps.length > 0 && <ReleasesTitle>Releases</ReleasesTitle>}
    {filteredEps.map((ep) => (
      <EpCover key={ep.id}>
        <img
          src={ep.coverUrl}
          alt={`Portada de ${ep.title}`}
          style={{ width: '40%', height: 'auto' }}
        />
      </EpCover>
    ))}
  </Releases>

  <VideosSection>
    {filteredVideos.length > 0 && <ReleasesTitle>Videos</ReleasesTitle>}
    {filteredVideos.map((video, index) => (
      <VideoItem key={index}>
        <h3>{video.name}</h3>
        <iframe
          src={video.url}
          title={video.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          playsInline
        ></iframe>
      </VideoItem>
    ))}
  </VideosSection>
</RightBox>
















      </Content>
    </ArtistDetail>
  )
}

export default ArtistDetailview

const ArtistDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 3rem 5rem;
  max-width: 1920px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 3rem 1rem;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  h3 {
    font-family: kaneda-gothic-extrabold;
    font-size: 5.5em;
    color: #ffffffea;
    text-shadow: 2px 1px 2px black;
    margin: 0;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 3.5em;
    }
  }

  hr {
    width: 100%;
    border: none;
    border-bottom: 1px solid white;
    margin: 0.5rem 0;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
  }
`

const Content = styled.div`
  display: flex;
  width: 100%;
 
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const ArtistImage = styled.img`
  width: 37vw;
  max-height: 40vh;
  object-fit: cover;
  object-position: top;

  display: block;
  @media (max-width: 768px) {
    width: 100%;
    max-height: unset;
    object-fit: contain;
  }
`

const Releases = styled.div`
  margin-top: 20px;
  display: flex;

 
  /* border: 1px solid green; */
  &.desktop-releases {
    display: block; /* Visible por defecto en escritorio */
    @media (max-width: 768px) {
      display: none; /* Oculto en móvil */
    }
  }

  &.mobile-releases {
    display: none; /* Oculto por defecto en escritorio */
    @media (max-width: 768px) {
      display: block; /* Visible solo en móvil */
      margin-top: 20px;
    }
  }
`

const ReleasesTitle = styled.h4`
  font-family: kaneda-gothic-extrabold;
  font-size: 3rem;
  color: #ffffffea;
  text-shadow: 1px 1px 2px black;
  margin-top: 0rem;
  margin-bottom: 0rem;
  text-transform: uppercase;



`

const EpCover = styled.div`
  justify-content: center;
  margin-top: 20px;
`

const ArtistBio = styled.div`
  padding: 0rem 0rem 0rem 2rem;
  color: #ffffff;
  p {
    font-family: 'kaneda-gothic-light';
    font-size: 1.8rem;
    letter-spacing: 1.4px;
    text-shadow: 1px 1px 2px black;
    margin: 0;
  }
  @media (max-width: 768px) {
    padding: 1rem 0rem;
    p {
      font-size: 1.3em;
    }
  }
`

const SocialLinks = styled.div`
  margin: 2em 0;
  display: flex;
  gap: 2rem;
  justify-content: center;
  padding: 0rem 0rem 0rem 2rem;
  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 0rem 0rem 0rem 0rem;
  }
`

const LeftBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid green; */
  @media (max-width: 768px) {
    width: 100%;
  }
`

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    order: 2;
  }
`
const VideosSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  padding: 0rem 0rem 0rem 2rem;

  iframe {
    border-radius: 8px;
    width: 100%;
    aspect-ratio: 16 / 9;
    border: 1px solid #333;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
    }
  }

  h3 {
    color: #fff;
    font-size: 18px;
    margin: 10px 0 0;
  }

  @media (max-width: 768px) {

    padding: 0rem 0rem 0rem 0rem;

    iframe {
      aspect-ratio: 16 / 9;
    }

    h3 {
      font-size: 16px;
    }
  }
`;


const VideoItem = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  background: #1a1a1a;

  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`