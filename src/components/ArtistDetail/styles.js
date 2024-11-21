import styled from 'styled-components'

export const ArtistDetail = styled.div`
  text-align: center;
  padding: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* border: 1px solid white; */
  @media (max-width: 834px) {
    margin: 0 auto ;
    width: 100%;
    height: auto;
    flex-direction: column;
    padding: 0px;
    flex-wrap: nowrap;
  }
`

export const ArtistImage = styled.img`
  width: 500px;
  /* border-radius: 15px; */
  @media (max-width: 834px){

    width: 100%;
    height: auto;
  };
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
  @media (max-width: 834px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 2rem;
  }
`


export const RightBox = styled.div`
  height: 100%;
  width: 50%;
  @media (max-width: 834px) {
    width: 100%;
    flex-direction: column;
  }
`