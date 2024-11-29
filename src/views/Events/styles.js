import styled from 'styled-components'

export const Content = styled.div`
  margin-top: 55px;
  height: 100vh;
  width: 100%;
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
    z-index: -2;
  }
`
