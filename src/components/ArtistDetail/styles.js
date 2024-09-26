import styled from 'styled-components'

export const ArtistDetail = styled.div`
  text-align: center;
  padding: 50px;
  display:flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* border: 1px solid yellow; */
`

export const ArtistImage = styled.img`
  width: 500px;
  border-radius: 15px;
`

export const ArtistName = styled.h2`
  margin-top: 15px;
  font-size: 24px;
  color: #dadada;
`

export const ArtistBio = styled.p`
  margin-top: 0px;
  font-size: 16px;
  line-height: 1.5;
  text-align: justify;
  color: #dadada;
`

export const SocialLinks = styled.div`
  margin-top: 20px;

  a {
    margin-right: 10px;
    font-size: 18px;
    color: #dadada;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
export const LefttBox = styled.div`
width: 50%;
height: 100%;
`


export const RightBox = styled.div`
  height: 100%;
  width: 50%;
`