import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { eps } from '../../data/data'
import MusicPlayer from '../MusicPlayer'
import * as S from './styles'

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

  // const handleTrackSelect = (trackId) => {
  //   setCurrentTrackId(trackId)
  // }

  return (
    <>
      <S.EpDetailContainer backgroundImage={selectedEp.coverUrl}>
        <S.EpContent>

          <MusicPlayer
            track={
              selectedEp.tracks.find((track) => track.id === currentTrackId) ||
              {}
            }
            currentTrackId={currentTrackId}
            setCurrentTrackId={setCurrentTrackId}
            selectedEp={selectedEp}
          />
        </S.EpContent>

      </S.EpDetailContainer>
      {/* <Footer /> */}
    </>
  )
}

export default EpDetail
