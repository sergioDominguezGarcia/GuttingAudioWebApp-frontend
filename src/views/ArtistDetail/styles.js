import styled from 'styled-components'

export const Home = styled.div`
  max-width: 100%;
  /* overflow-x: hidden; */
  
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
  margin: 3rem 0rem 0rem 0rem;
  z-index: -1;
  width: 100%;
`

export const Artists = styled.div`
  display: flex;
  flex-direction: row;
  background: #000000b6;
  color: white;
  padding: 7rem;
  justify-content: center;
  width: 80%;
  height: 100%;
  box-sizing: border-box;
`
