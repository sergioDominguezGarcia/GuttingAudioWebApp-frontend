import styled from 'styled-components'

export const Home = styled.div`
  min-height: 100vh;
  width: calc(100% - 5vw);
  margin: 75px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.background});
    background-size: cover;
    background-position: center;
    filter: blur(8px) brightness(0.5);
    z-index: -2;
  }

`

export const Content = styled.div`
  background-position: center;
  display: flex;
  background-attachment: scroll;
  background-size: center;
  justify-content: center;
  height: 100vh;
  z-index: 1;
  width: 100vw;
  overflow-y: auto;
`

export const Artists = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: white;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`
