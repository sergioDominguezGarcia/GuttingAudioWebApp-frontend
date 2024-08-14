import { memo } from 'react'
import * as S from './styles'
import back from "../../assets/back.jpg"
import Header from '../../components/Header'
import SoundCloudPlayer from '../../components/Player'
import { PlayListsUrls } from './constants'
import AudioPlayer from '../../Reproductor'
const Home = () => {
  return (
    <S.Home>
      <Header />
      <S.Content background={back}>
        <S.Releases>
          <S.Card>
            {PlayListsUrls.map((url, index) => (
              <AudioPlayer key={index} playlistUrl={url} autoPlay={false} />
            ))}
          </S.Card>
        </S.Releases>
      </S.Content>
    </S.Home>
  )
}

export default memo(Home)
