import { memo } from 'react'
import * as S from './styles'
import back from '../../assets/back.webp'
import ArtistDetail from '../../components/ArtistDetail'

const Detail = () => {
  return (
    <S.Home>
      <S.Content background={back}>
        <S.Artists>
          <ArtistDetail />
        </S.Artists>
      </S.Content>
    </S.Home>
  )
}

export default memo(Detail)
