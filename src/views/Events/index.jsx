import { memo } from 'react'
import * as S from './styles'
import back from '../../assets/back.webp'
import EventList from '../../components/EventList'

const Events = () => {
  return<S.Content background={back}>

<S.Title>EVENTS</S.Title>
<S.LineSeparator></S.LineSeparator>

    <EventList />
  </S.Content>
}

export default memo(Events)


