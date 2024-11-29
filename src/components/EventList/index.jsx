import React from 'react'

import * as S from './styles'
import { events } from './constants'

const EventList = () => {

  return (
    <S.Content>
      {events.map((event) => (
        <S.EventCard key={event.id} image={event.image}>
          <S.EvenTitle>
            <h3>{event.date}</h3>
          </S.EvenTitle>
        </S.EventCard>
      ))}
    </S.Content>
  )
}

export default EventList
