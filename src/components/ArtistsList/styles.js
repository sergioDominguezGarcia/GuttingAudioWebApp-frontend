import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ArtistsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  gap: 0.6em;
  box-sizing: border-box;
  margin-top: 1rem;
  @media (max-width: 1200) {
    gap: 0.2em;
  }
  /* gap: 1em; */
`

export const ArtistCard = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  /* border: 1px solid white; */
  box-sizing: border-box;
  width: 20vw;
  height: 20vw;
  max-height: 24vw;
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  @media (max-width: 1200px) {
    width: 40vw;
    max-width: 40vw;
    height: 40vw;
    max-height: 40vw;
  }
`
  // border: 1px solid white;

export const ArtistImage = styled.img`
  /* max-height: 20vw; */
  width: 100%;
  height: 100%;
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
  @media (max-width: 1200px) {
    font-size: 1.7em;
  }
  @media (max-width: 834px) {
    font-size: 1.2em;
  }
`
export const StyledLink = styled(Link)`
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  transition: transform 0.5s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`
