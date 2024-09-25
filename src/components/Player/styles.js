import styled from 'styled-components'

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const TrackCard = styled.div`
  background: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Artist = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`

export const Title = styled.p`
  font-size: 1rem;
  margin: 0;
`

export const Album = styled.p`
  font-size: 0.9rem;
  margin: 0;
  color: #666;
`

export const Audio = styled.audio`
  width: 200px;
  margin-left: 1rem;
`
