import styled from 'styled-components'

export const Home = styled.div`
  max-width: 100%;

  overflow-x: hidden;
`

export const Content = styled.div`
  background-image: url(${(props) => props.background});
  background-position: center;
  display: flex;
  background-attachment: fixed;
  justify-content: center;
  height: 100%;

  width: 100%;
`


export const Releases = styled.div`
  background-color: black;
  display: flex;
  flex-direction: row;
  width: 70%;
  background: rgb(94, 94, 94);
  background: linear-gradient(
    90deg,
    rgba(94, 94, 94, 0) 0%,
    rgba(0, 0, 0, 1) 10%,
    rgba(0, 0, 0, 1) 90%,
    rgba(94, 94, 94, 0) 100%
  );
  height: 100%;

  margin-top: 7rem;
  padding: 2rem;
  gap: 16px;
  align-items: start;
  justify-items: center;
`
export const Card = styled.div`
  display: flex;

  flex-wrap: wrap;

  gap: 2rem;
  justify-content: center;
`
