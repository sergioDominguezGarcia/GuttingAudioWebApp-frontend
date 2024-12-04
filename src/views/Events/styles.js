import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  height: auto;
  margin-top: 60px;
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
