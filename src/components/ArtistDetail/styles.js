import styled from 'styled-components'

export const ArtistDetail = styled.div`
  background-color: rgba(0, 0, 0, 0.12);
  /* border: 1px solid rgb(221, 221, 221, 0.5); */
  /* border-radius: 16px; */
  box-shadow: 0 13px 20px rgba(0, 0, 0, 0.5);
  display: flex;
  margin: auto;
  padding: 3rem 5rem;
  /* box-sizing: border-box; */
  transition: all 0.5s ease;
  width: 90%;
  /* height: 60vh; */
  @media (max-width: 1200px) {
    width: 100%;
    height: 86%;
    flex-direction: column;
    padding: 0rem;
    border: none;
    
    /* padding-top: 70px; */
    flex-wrap: nowrap;
  }
`

export const ArtistImage = styled.img`
  width: 100%;
  /* min-width: 30em; */
  height: auto;
  display: flex;
  margin-bottom: 6rem;

  /* align-self: center; */
  @media (max-width: 1200px) {
    width: 100%;
    margin-bottom: 0rem;
  }

  @media (max-width: 425px) {
    margin-bottom: 8rem;
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
    /* border-bottom: 1 px solid rgb(221, 221, 221, 0.5); */
    width: 75%;
  }
  @media (max-width: 1200px) {
    display: none;

  }
`
export const EpCover = styled.div`
  /* padding: 4rem 0rem; */
  justify-content: center;
  /* border: 1px solid white; */
  @media (max-width: 834px) {
    img {
      width: 50%;
    }
  }
`

export const ArtistName = styled.div`
  display: flex;
  align-self: start;
  margin-left: 2rem;
  color: rgb(221, 221, 221, 0.95);
  font-family: kaneda-gothic-light;
  line-height: 1.5;
  font-size: 3em;
  letter-spacing: 0.06em;
  border-bottom: 1px solid gray;
  width: 100%;
  h3 {
    font-family: kaneda-gothic-extrabold;
    letter-spacing: 0.6px;
    /* color: rgba(255, 255, 255, 0.8); */
    margin: 0;
    font-size: 2.4em;
    gap: 2.5em;
    text-shadow: 2px 1px 2px black;
  }
  @media (max-width: 834px) {
    margin-left: 1.5rem;
    height: 40px;
    border-bottom: none;
    h3 {
      font-size: 1.5em;
    }
  }
`

export const ArtistBio = styled.div`
  display: flex;
  /* top: -10px; */
  line-height: 32px;
  padding: 2rem;
  color: #dadada;
  p {
    font-family: 'kaneda-gothic-light';
    margin: 0;
    font-size: 2em;
    letter-spacing: 1.4px;
    text-shadow: 1px 1px 2px black;
  }
  @media (max-width: 1200px) {
    padding: 1.5em;
    p {
      text-align: start;
      line-height: 1;
      font-size: 1.8em;
    }
  }
  @media (max-width: 834px) {
    padding: 1.5em;
    p {
      text-align: start;
      line-height: 1;
      font-size: 1.8em;
    }
  }
`

export const SocialLinks = styled.div`
  margin: 2em 0em 0em 4em;
  /* border: 1px solid grey; */
  box-sizing: border-box;
  display: flex;
  gap: 2.5rem;
  width: 100%;
  /* height: 40px; */
  /* border: 1px solid rgb(221, 221, 221, 0.5); */
  @media (max-width: 834px) {
    justify-content: start;
    margin-left: 3.5em;
    margin-top: 4em;
    gap: 1.5rem;
  }
`
export const LefttBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  /* border: 1px solid rgb(221, 221, 221, 0.5); */
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1200px) {
    width: 100%;
    /* top: 0px; */
    flex-direction: column;
    margin-bottom: 0rem;
  }
`

export const RightBox = styled.div`
  display: flex;
  /* padding: 1.5rem; */
  /* border: 1px solid rgb(221, 221, 221, 0.5); */
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 90%;
  width: 50%;
  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
  }
`
