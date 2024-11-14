import React from 'react'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import { eps } from '../../constants/constants' // Importa el array aquí

const EpList = () => {
  const navigate = useNavigate()

  const handleEpClick = (epId) => {
    navigate(`/releases/${epId}`)
  }

  return (
    <S.EpGrid>
      {eps.map((ep) => (
        <S.EpCard
          key={ep.id}
          coverUrl={ep.coverUrl}
          onClick={() => handleEpClick(ep.id)}
        >
          <S.EpInfo2>
            <p>{ep.gttn}</p>
          </S.EpInfo2>
          <S.Overlay>
            <S.PlayIcon>▶</S.PlayIcon>
          </S.Overlay>
          <S.EpInfo>
            <p>{ep.artist}</p>
            <h3>{ep.title}</h3>
          </S.EpInfo>
        </S.EpCard>
      ))}
    </S.EpGrid>
  )
}

export default EpList
