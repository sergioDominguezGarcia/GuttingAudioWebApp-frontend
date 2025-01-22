import React from 'react'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import eps from '../../data/eps.json'

const EpList = () => {
  const navigate = useNavigate()

  const handleEpClick = (epId) => {
    navigate(`/releases/${epId}`)
  }

  // Ordena los EPs en orden descendente por ID
  const sortedEps = [...eps].sort((a, b) => b.id - a.id)

  return (
    <S.EpGrid>
      {sortedEps.map((ep) => (
        <S.EpCard
          key={ep.slug}
          coverUrl={ep.coverUrl}
          onClick={() => handleEpClick(ep.slug)}
        >
          <S.EpInfo2>
            <p>{ep.slug}</p>
          </S.EpInfo2>
          <S.Overlay>
            <S.PlayIcon>▶</S.PlayIcon>
          </S.Overlay>
          <S.EpInfo>
            <S.ArtistName><p>{ep.artist}</p></S.ArtistName>
            <h3>{ep.title}</h3>
          </S.EpInfo>
        </S.EpCard>
      ))}
    </S.EpGrid>
  )
}

export default EpList
