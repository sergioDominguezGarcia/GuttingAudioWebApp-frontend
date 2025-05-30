import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  gap: 0.9vw;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  min-height: auto;
  
  @media (max-width: 834px) {
    gap: 3.5vw;
  }
`
export const EventCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  width: 22vw;
  height: 28vw;
  transition: transform 0.5s ease, box-shadow 0.3s ease;
  margin-bottom: 4vw;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 1200px) {
    width: 17vw;
    height: 26vw;
   
  }
  @media (max-width: 932px) {
    width: 40vw;
    height: 52vw;
  
  }
`

export const EvenTitle = styled.div`
  text-transform: uppercase;
  width: 100%;
  height: auto;

  background: rgba(
    0,
    0,
    0,
    0.9
  ); /* Fondo semitransparente para destacar el texto */
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 10px;
  a {
    font-weight: 800;
    color: inherit; /* Usa el color del elemento padre */
    text-decoration: none;
  }
  h3 {
    font-family: kaneda-gothic-extrabold;
    letter-spacing: 0.09em;
    margin: 0;
    font-size: 1.3vw;
    gap: 2.5em;
    text-shadow: 1px 1px 2px black;
  }
  @media (max-width: 1200px) {
    a {
      font-size: 2vw;
    }
    h3 {
      font-family: kaneda-gothic-extrabold;
      letter-spacing: 0.09em;
      margin: 0;
      font-size: 1.7vw;
      gap: 2.5em;
      text-shadow: 1px 1px 2px black;
    }
  }
  @media (max-width: 834px) {
    h3 {
      font-family: kaneda-gothic-extrabold;
      letter-spacing: 0.09em;
      margin: 0;

      gap: 2.5em;
      text-shadow: 1px 1px 2px black;
    }
  }
`
