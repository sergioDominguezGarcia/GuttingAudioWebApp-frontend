import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { eps } from '../../constants/constants'
import TrackPlayer from '../TrackPlayer'
import * as S from './styles'
import blanco from '../../assets/blanco.png'
// import Footer from '../Footer'
const EpDetail = () => {
  const { epId } = useParams()
  const [selectedEp, setSelectedEp] = useState(null)
  const [currentTrackId, setCurrentTrackId] = useState(null)

  useEffect(() => {
    const ep = eps.find((ep) => ep.id === epId)
    setSelectedEp(ep)
  }, [epId])

  useEffect(() => {
    if (selectedEp && selectedEp.tracks.length > 0) {
      setCurrentTrackId(selectedEp.tracks[0].id) // Establecer la primera pista como predeterminada
    }
  }, [selectedEp]) // Solo se ejecuta cuando selectedEp cambia

  if (!selectedEp) return <div>Loading...</div>

  const handleTrackSelect = (trackId) => {
    setCurrentTrackId(trackId)
  }

  return (
    <>
      <S.EpDetailContainer backgroundImage={selectedEp.coverUrl}>
        <S.EpContent>
          <S.EpCover>
            <img src={selectedEp.coverUrl} alt={selectedEp.title} />
            <S.TrackList>
              {selectedEp.tracks.map((track) => (
                <S.TrackItem
                  key={track.id}
                  onClick={() => handleTrackSelect(track.id)}
                >
                  {track.title}
                </S.TrackItem>
              ))}
            </S.TrackList>
          </S.EpCover>

          <S.Info href="">
            <h2>{selectedEp.title}</h2>
            <h3> {selectedEp.artist} </h3>
          
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            officia cupiditate culpa ullam animi suscipit ipsa, corporis, at eum
            a fugit, dolorem omnis veritatis architecto error! Soluta facilis
            labore perspiciatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. <br />
            Facere officia cupiditate culpa ullam animi suscipit ipsa, corporis,
            at eum a fugit, dolorem omnis veritatis architecto error! Soluta
            facilis labore perspiciatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
            <br /> Facere officia cupiditate culpa ullam animi
            suscipit ipsa, corporis, at eum a fugit, dolorem omnis veritatis
            architecto error! Soluta facilis labore perspiciatis. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. <br />
            Facere officia cupiditate culpa ullam animi suscipit ipsa, corporis,
            at eum a fugit, dolorem omnis veritatis architecto error! Soluta
            facilis labore perspiciatis.
          </S.Info>
        </S.EpContent>
        <S.PlayerContainer>
          
          <TrackPlayer
            track={
              selectedEp.tracks.find((track) => track.id === currentTrackId) ||
              {}
            }
            currentTrackId={currentTrackId}
            setCurrentTrackId={setCurrentTrackId}
          />
        </S.PlayerContainer>
      </S.EpDetailContainer>
      {/* <Footer /> */}
    </>
  )
}

export default EpDetail
