import styled from 'styled-components'

export const ArtistDetail = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border: 2px solid rgb(221, 221, 221, 0.5);
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  margin: auto;
  padding: 3rem;
  /* box-sizing: border-box; */
  transition: all 0.5s ease;
  width: 90%;
  /* height: 60vh; */
  @media (max-width: 834px) {
    /* margin: 0 auto; */
    width: 100%;
    height: auto;
    flex-direction: column;

    padding: 0px;
    flex-wrap: nowrap;
  }
`

export const ArtistImage = styled.img`
  width: 25vw;
  @media (max-width: 834px) {
    width: 100%;
    height: auto;
  }
`
export const Releases = styled.div`
  h3 {
    padding: 1rem 1rem;
    font-family: kaneda-gothic-extrabold;
    letter-spacing: 0.09em;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    font-size: 2vw;
    gap: 2.5em;
    text-shadow: 1px 1px 2px black;
    border-bottom: 1px solid rgb(221, 221, 221, 0.5);
    width: 75%;
  }
`
export const EpCover = styled.div`
  padding: 4rem 0rem;
  justify-content:center ;

`

export const ArtistName = styled.div`
  display: flex;
  top: 10px;

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
`

export const SocialLinks = styled.div`
padding: 2rem;
display: flex;
  gap: 1.5rem;
  width: 100%;
  height: auto;
  /* border: 1px solid rgb(221, 221, 221, 0.5); */
`
export const LefttBox = styled.div`
  width: 50%;
  height: auto;
  @media (max-width: 834px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 2rem;
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
