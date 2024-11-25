import styled from 'styled-components'

export const Home = styled.div`
  width: 100vw;
  overflow-x: hidden;
  /* overflow-y: hidden; */
  height: 100vh;
`

export const Content = styled.div`
  background-image: url(${(props) => props.background});
  background-position: center;
  display: flex;
  background-attachment: scroll;
  background-size: center;
  justify-content: center;
  height: 100%;
  z-index: -1;
  width: 100%;
`

export const Artists = styled.div`
  display: flex;
  color: white;
  justify-content: 
  center;
  align-items: center;
  /* border: 1px solid rgb(221, 221, 221, 0.5); */
  width: 100vw;
  height: 100%;
  @media (max-width: 834px) {
    width: 100vw;
    padding: 0rem;
    top: 0px;
  }
`
