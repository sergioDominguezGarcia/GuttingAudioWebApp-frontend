import { memo } from 'react'
import * as S from './styles'
import back from '../../assets/back.webp'
import Header from '../../components/Header'
import Playlists from '../../components/Playlist'
import GlobalPlayer from '../../components/GlobalPlayer'
import { PlayerProvider } from '../../components/Player/PlayerContext'

const Home = () => {
  return (
    <S.Home>
      <Header />
      <S.Content background={back}>
        <S.Releases>
      <PlayerProvider>
            <Playlists />
            <GlobalPlayer />
          </PlayerProvider>
        </S.Releases>
      </S.Content>
    </S.Home>
  )
}

export default memo(Home)
