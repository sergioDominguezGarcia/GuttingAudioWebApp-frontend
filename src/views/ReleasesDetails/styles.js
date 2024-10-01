import styled from 'styled-components'

export const Content = styled.div`
  /* background-image: url(${(props) => props.background}); */
  /* background-position: center; */
  display: flex;
  background-attachment: scroll;
  /* background-size: center; */
  justify-content: center;
  height: 100%;
  /* padding: 1rem; */
  z-index: -1;
  width: 100%;
`

export const ReleaseDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  /* background: rgba(255, 255, 255, 0.005); */
  color: white;
  



  /* padding-top: 21%; */
  justify-content: center;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  /*no hace efecto borroso*/
`
