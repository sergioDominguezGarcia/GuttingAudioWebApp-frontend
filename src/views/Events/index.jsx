import { memo } from 'react'
import * as S from './styles'
import back from '../../assets/back.webp'
import EventList from '../../components/EventList'

const Events = () => {
  return <S.Content background={back}>

    <EventList />
  </S.Content>
}

export default memo(Events)
