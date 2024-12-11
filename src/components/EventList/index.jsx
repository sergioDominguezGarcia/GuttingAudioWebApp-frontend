import React from 'react'

import * as S from './styles'
import { events } from './constants'

const EventList = () => {

  return (
    <S.Content>
      {events.map((event) => (
        <S.EventCard key={event.id} image={event.image}>
          <S.EvenTitle>
            <h3>{event.title}</h3>
            <h3>{event.date}</h3>
            <a href={event.url} target="_blank" rel="noopener noreferrer">
              Buy ticket!
            </a>
          </S.EvenTitle>
        </S.EventCard>
      ))}
    </S.Content>
  )
}

export default EventList
