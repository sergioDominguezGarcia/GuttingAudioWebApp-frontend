import styled from 'styled-components'

export const Content = styled.div`
  position: relative; /* Importante para el posicionamiento adecuado */
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  height: 100%;
  width: calc(100% - 5vw);
  margin: auto;
  z-index: 1; 
`
export const Img = styled.div`
  position: fixed;
`
export const Releases = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  color: white;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  justify-content: space-around;
  padding-top: 8rem;
  @media (max-width: 720px) {
    padding-top: 5rem;
  }
`


export const Title = styled.h1`
  color: #ffffff; 
  text-decoration: none;
  font-family: 'kaneda-gothic-extrabold';
  text-transform: uppercase;
  display: block;
  margin: 0vw 0vw 0vw 0vw;
  font-size: 5vw;
  @media (max-width: 768px) {
    margin: 0vw 0vw 0vw 0vw;
    font-size: 9vw;
  }
`

export const LineSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
 margin-bottom: 8px;
`;