import { memo } from 'react'
import * as S from './styles'
import back from '../../assets/back.webp'
import ArtistsList from '../../components/ArtistsList'

const Artists = () => {


  return (
    <S.Home background={back}>
      <S.Content>
        <S.Artists>
          <ArtistsList />
        </S.Artists>
      </S.Content>
    </S.Home>
  )
}

export default memo(Artists)
