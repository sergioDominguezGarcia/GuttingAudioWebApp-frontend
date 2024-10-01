import styled from 'styled-components'

export const EpDetailContainer = styled.div`
  padding: 20px;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2`
  margin-bottom: 20px;
`

export const EpContent = styled.div`
  display: flex;
  gap: 20px;
  width: 70%;
  align-items: center;
  /* justify-content: center; */
  justify-content: space-around;
  /* border: 1px solid yellow; */

`

export const EpCover = styled.div`
  img {
    width: 600px;
    height: auto;
    border-radius: 8px;
  }
`

export const TrackList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`