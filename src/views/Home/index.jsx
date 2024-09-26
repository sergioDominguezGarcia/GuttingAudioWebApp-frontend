import { memo } from 'react'
import * as S from './styles'
import back from '../../assets/back.webp'

import Player from '../../components/Player'

const Home = () => {


  return (
    <S.Home>

      <S.Content background={back}>
        <S.Releases>
        <Player />
        </S.Releases>
      </S.Content>
    </S.Home>
  )
}

export default memo(Home)
