import React from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import { artistsData } from './constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import eps from '../../data/eps.json'
import videos from '../../data/videos.json'
const ArtistDetailview = () => {
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  const { slug } = useParams() // Recibe el slug desde la URL
  const navigate = useNavigate()
  const artist = artistsData[slug] // Busca los datos del artista

  if (!artist) {
    return <p>Artista no encontrado</p>
  }

  // Crear un array con el nombre y el alias del artista en minúsculas
  const artistNames = [artist.name.toLowerCase()]
  if (artist.aka) {
    artistNames.push(artist.aka.toLowerCase())
  }

  // Filtrar EPs que coincidan con el nombre o el alias
  const filteredEps = eps.filter((ep) => {
    const epArtists = ep.artist
      .toLowerCase()
      .split('·')
      .map((artist) => artist.trim()) // Divide y limpia los nombres de artistas
    return epArtists.some((epArtist) => artistNames.includes(epArtist)) // Comprueba si algún artista coincide
  })

  // Filtrar videos asociados al artista (por tags que coincidan con el nombre o alias)
  const filteredVideos = videos.filter((video) =>
    video.tags.some((tag) => artistNames.includes(tag.toLowerCase()))
  )

  const goToEpDetail = (epId) => {
    navigate(`/releases/${epId}`) // Navegar a la vista de detalle del EP
  }

  return (
    <ArtistDetail>
      <Header>
        <h3>{artist.name}</h3>
        <hr />
      </Header>
      <Content>
        <LeftBox>
          <ArtistImage src={artist.image} alt={artist.name} />
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
        </LeftBox>

        <RightBox>
          <ArtistBio>
            <BioTitle>Biografía</BioTitle>
            {artist.bio.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </ArtistBio>
        </RightBox>
        <BottomBox>
          <Releases
          // className="desktop-releases"
          >
            {filteredEps.length > 0 && (
              <ReleasesTitle>
                Releases
                {/* <hr /> */}
              </ReleasesTitle>
            )}
            <ReleasesContainer>
              {filteredEps.map((ep) => (
                <EpCover key={ep.slug} onClick={() => goToEpDetail(ep.slug)}>
                  <img
                    src={ep.coverUrl}
                    alt={`Portada de ${ep.title}`}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <EpTitle>{ep.title}</EpTitle>
                </EpCover>
              ))}
            </ReleasesContainer>
          </Releases>
          <VideosSection>
            {filteredVideos.length > 0 && (
              <ReleasesTitle>
                Videos
                {/* <hr /> */}
              </ReleasesTitle>
            )}
            {filteredVideos.map((video, index) => (
              <VideoItem key={index}>
                <iframe
                  src={video.url}
                  title={video.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  playsInline
                ></iframe>
                {/* <h3>{video.name}</h3> */}
              </VideoItem>
            ))}
          </VideosSection>
        </BottomBox>
      </Content>
    </ArtistDetail>
  )
}

export default ArtistDetailview

const ArtistDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 2rem;
  padding: 3rem 5rem;
  max-width: 1920px;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100vw;
    margin: 0rem 0rem 0rem 0rem;

    padding: 1rem;
  }
  @media (max-width: 420px) {
    width: 100%;
    max-width: 100vw;
    margin: 0rem;
    padding: 1rem;
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
      padding-top: 2rem;
    }
    @media (max-width: 420px) {
      padding-top: 0rem;
    }
  }

  hr {
    width: 95%;
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
  flex-wrap: wrap;
  width: 100%;
  /* gap: 1rem; */
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    /* padding: 0.5rem; */
    width: 100%;
  }
`
const LeftBox = styled.div`
  flex: 1;
  max-width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid green; */
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
  @media (max-width: 420px) {
    max-width: 100%;

    justify-content: flex-start;
  }
`

const RightBox = styled.div`
  flex: 1; /* Ocupa el 50% del espacio en escritorio */
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-basis: 100%;
  @media (max-width: 768px) {
    max-width: 100%;

    justify-content: flex-start;
  }
`

const BottomBox = styled.div`
  flex-basis: 100%;
  display: flex;
  gap: 1rem;
  /* padding: 1rem; */
  margin-top: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ArtistImage = styled.img`
  padding-top: 1rem;
  width: 85%;
  max-height: 58vh;
 
  object-fit: cover;
  object-position: top;
  /* border: 1px solid green; */
  display: block;
  @media (max-width: 768px) {
    width: 100%;
    max-height: unset;
  }
  @media (max-width: 420px) {
    width: 100%;
  }
`

const Releases = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const ReleasesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 30px;
  /* padding: 10px; */
  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: left;
    padding: 0px;
  }
  @media (max-width: 420px) {
    gap: 10px;
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
  hr {
    width: 85%;
    border: none;
    border-bottom: 1px solid white;
    margin: 0.5rem 0;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      margin-bottom: 20px;
      width: 100%;
    }
  }
`
const BioTitle = styled(ReleasesTitle)`
    margin-bottom: 25px;
  hr {
    visibility: hidden;
    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
  }
`
const EpCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 18rem;
  cursor: pointer; /* Muestra la "manita" */
  transition: transform 0.3s ease; /* Suaviza la animación de escala */

  &:hover {
    transform: scale(1.05); /* Aplica el efecto de "zoom in" al hacer hover */
  }

  @media (max-width: 420px) {
    width: 45%;
  }
`;




const EpTitle = styled.p`


font-family: 'kaneda-gothic-light';
  margin-top: 0.5rem;
  font-size: 1.2rem;
  color: #fff;
`


const ArtistBio = styled.div`
  /* padding: 0rem 0rem 0rem 2rem; */
  color: #ffffff;
  margin-top: 0rem;
  width: 90%;
  p {
    font-family: 'kaneda-gothic-light';
    font-size: 1.8rem;
    letter-spacing: 1.4px;
    text-shadow: 1px 1px 2px black;
    margin: 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    p {
      font-size: 1.3em;
    }
  }
`

const SocialLinks = styled.div`
  /* margin-top: 2em; */
  display: flex;
  gap: 2rem;
  justify-content: right;
  padding: 1rem 9rem 0rem 0rem;
  /* border: 1px solid green; */


  
  @media (max-width: 768px) {
    gap: 1rem;
    padding-right: 1rem;
  }
`

const VideosSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 20px;
  position: relative;

  margin-bottom: 1rem;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
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
    padding: 6px;
    font-size: 18px;
    height: 16px;
  
  }
  hr {
    width: 100%;
    border: none;
    border-bottom: 1px solid white;
    margin: 0.5rem 0;
    margin-bottom: 15px;
    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
  }
`

const VideoItem = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  background: #1a1a1a;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  @media (max-width: 768px) {
    width: auto;
  }
`
