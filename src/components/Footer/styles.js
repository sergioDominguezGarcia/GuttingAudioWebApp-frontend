import styled from 'styled-components'

export const Footer = styled.div`
  background-color: black;
  display: flex;
  position: static;
  bottom: 0;
  color: #fff;
  flex-direction: row;

  justify-content: space-between;
  gap: 1rem;
  padding: 10px 50px 10px 50px;
  @media (max-width: 880px) {
    padding: 10px 15px 0px 10px;
    padding: 10px;
    justify-content: space-around;
  }
`
