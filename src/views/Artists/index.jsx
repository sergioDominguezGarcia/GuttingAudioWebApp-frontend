import { memo } from 'react'
import * as S from './styles'
import back from '../../assets/back.webp'
import Header from '../../components/Header'
import ArtistsList from '../../components/ArtistsList'

const Artists = () => {


  return (
    <S.Home>

      <S.Content background={back}>
        <S.Artists>
          <ArtistsList />
        </S.Artists>
      </S.Content>
    </S.Home>
  )
}

export default memo(Artists)
