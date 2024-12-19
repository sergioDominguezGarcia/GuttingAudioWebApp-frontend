import React from 'react'

import * as S from './styles'
import { events } from './constants'

const EventList = () => {

  return (
    <S.Content>
      {events.map((event) => (
        <S.EventCard
          key={event.id}
          image={event.image}
          onClick={() =>
            window.open(event.url, '_blank', 'noopener noreferrer')
          }
        >
          onClick=
          {() => window.open(event.url, '_blank', 'noopener noreferrer')}
          <S.EvenTitle>
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
