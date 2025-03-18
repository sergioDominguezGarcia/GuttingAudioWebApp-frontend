import React from 'react'

import * as S from './styles'
import { events, option1 } from './constants'

const EventList = () => {
  return (
    <S.Content>
      {events.map((event) => (
        <S.EventCard
          key={event.id}
          image={event.image}
          onClick={() => {
            if (event.url) {
              window.open(event.url, '_blank', 'noopener noreferrer')
            }
          }}
        >
          <S.EvenTitle>
            <a
              href={event.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
            >
              {event.mensaje === option1 ? 'EVENT END' : 'BUY TICKETS!'}
            </a>
          </S.EvenTitle>
        </S.EventCard>
      ))}
    </S.Content>
  )
}

export default EventList
