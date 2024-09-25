import { memo, useEffect, useState } from 'react'
import * as S from './styles'
import back from '../../assets/back.webp'
import Header from '../../components/Header'
import Player from '../../components/Player'

const Home = () => {


  return (
    <S.Home>
      <Header />
      <S.Content background={back}>
        <S.Releases>
        <Player />
        </S.Releases>
      </S.Content>
    </S.Home>
  )
}

export default memo(Home)
