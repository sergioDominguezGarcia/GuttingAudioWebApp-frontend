import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ArtistsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  gap: 0.3em;
  /* box-sizing: border-box; */
`

export const ArtistCard = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  
  /* position: relative; */
  /* width: 100%; */
  box-sizing: border-box;
`

export const ArtistImage = styled.img`
  min-height: 333px;
  min-width: 330px;
  object-fit: cover;
  display: flex;
`

export const ArtistName = styled.a`
  cursor: pointer;
  font-family: kaneda-gothic-extrabold;
  padding: 6px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  font-size: 1.7em;

  background-color: rgba(0, 0, 0, 0.8);
  color: rgb(221, 221, 221, 0.9);
  text-align: center;
  /* Hace coincidir las esquinas redondeadas */
`
export const StyledLink = styled(Link)`
  box-sizing: border-box;
  text-decoration: none;
  /* border: 1px solid rgb(221, 221, 221, 0.2); */

  display: flex;
  flex-direction: column;
  transition: transform 0.5s ease, box-shadow 0.3s ease;
  width: 330px;
  min-height: 333px;
  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`
