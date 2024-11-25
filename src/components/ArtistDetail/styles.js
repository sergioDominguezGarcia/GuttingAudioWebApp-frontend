import styled from 'styled-components'

export const ArtistDetail = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid rgb(221, 221, 221, 0.5);
  /* border-radius: 16px; */
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  margin: auto;
  padding: 3rem;
  /* box-sizing: border-box; */
  transition: all 0.5s ease;
  width: 90%;
  /* height: 60vh; */
  @media (max-width: 834px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    border: none;
    padding: 16px;
    padding-top: 70px;
    flex-wrap: nowrap;
    }
`

export const ArtistImage = styled.img`
  width: 25vw;
  /* border-radius: 8px; */
  @media (max-width: 834px) {
    width: 100%;
    height: auto;
  }
`
export const Releases = styled.div`
  h3 {
    /* padding: 1rem 1rem; */
    font-family: kaneda-gothic-extrabold;
    letter-spacing: 0.09em;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    font-size: 2vw;
    gap: 2.5em;
    text-shadow: 1px 1px 2px black;
    border-bottom: 0.2 px solid rgb(221, 221, 221, 0.5);
    width: 75%;
  }
  @media (max-width: 834px) {
    display: none;
    h3 {
      font-size: 1.5rem;
    }
  }
`
export const EpCover = styled.div`
  padding: 4rem 0rem;
  justify-content: center;
  @media (max-width: 834px) {
    img {
      width: 50%;
    }
  }
`

export const ArtistName = styled.div`
  display: flex;
  color: rgb(221, 221, 221, 0.9);
  font-family: kaneda-gothic-light;
  line-height: 1.5;
  font-size: 1.8em;
  letter-spacing: 0.06em;
  h3 {
    font-family: kaneda-gothic-extrabold;
    letter-spacing: 0.09em;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    font-size: 2.5vw;
    gap: 2.5em;
    text-shadow: 1px 1px 2px black;
  }
  @media (max-width: 834px) {
    height: 40px;
    h3 {
      font-size: 1.5em;
    }
  }
`

export const ArtistBio = styled.div`
  display: flex;
  top: -10px;
  line-height: 1.5;
  text-align: justify;
  color: #dadada;
  p {
    font-family: 'kaneda-gothic-light';
    margin: 0;
    font-size: 1.5vw;
    letter-spacing: 1.2px;
    text-shadow: 1px 1px 2px black;
  }
  @media (max-width: 834px) {
    p {
      line-height: 1;
      font-size: 1.5em;
    }
  }
`

export const SocialLinks = styled.div`
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  width: 100%;
  height: 40px;
  /* border: 1px solid rgb(221, 221, 221, 0.5); */
  @media (max-width: 834px) {
    justify-content: center;
    gap: 3.5rem;
  }
`
export const LefttBox = styled.div`
  width: 50%;
  height: auto;
  @media (max-width: 834px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 0rem;
  }
`

export const RightBox = styled.div`
  display: flex;
  /* padding: 1.5rem; */
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 90%;
  width: 50%;
  @media (max-width: 834px) {
    width: 100%;
    flex-direction: column;
  }
`
