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
  


export const Title = styled.h1`
  color: #ffffff; 
  text-decoration: none;
  font-family: 'kaneda-gothic-extrabold';
  text-transform: uppercase;
  display: block;
  margin: 10vh 2vw 0vw 4vw;
  font-size: 5vw;
 
  @media (max-width: 768px) {
    margin: 10vh 0vw 0vw 2vw;
    font-size: 9vw;
  }
`

export const LineSeparator = styled.div`
  width: 93%;
  height: 1px;
  background-color: white;
 margin-bottom: 8px;
 margin: 0vh 4vw 2vw 4vw;
 
 @media (max-width: 768px) {
  width: 96%;
    margin: 0vh 4vw 4vw 2vw;
    font-size: 9vw;
  }
`