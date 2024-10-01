import React from 'react'
import * as S from './styles';
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
        <S.EpCard key={ep.id} onClick={() => handleEpClick(ep.id)}>
          <S.EpCover src={ep.coverUrl} alt={ep.title} />
          <S.EpTitle>{ep.title}</S.EpTitle>
        </S.EpCard>
      ))}
    </S.EpGrid>
  )
}

export default EpList
