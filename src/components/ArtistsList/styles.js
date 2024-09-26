import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ArtistsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  width: 80%;
`

export const ArtistCard = styled.div`
  
  text-align: center;

  position: relative;
`

export const ArtistImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`

export const ArtistName = styled.h3`
  position: absolute;
  bottom: 0;
  cursor: pointer;
  left: 0;
  height: 12%;
  width: 100%;
  margin: 0; /* Elimina márgenes */
  /* padding: 6px; */
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  padding: 7px 0px 2px 0px;
  border-bottom-left-radius: 10px; /* Hace coincidir las esquinas redondeadas */
  border-bottom-right-radius: 10px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  position: relative;
  /* border: 1px solid yellow; */
  height: 200px;
  width: 200px;
`
