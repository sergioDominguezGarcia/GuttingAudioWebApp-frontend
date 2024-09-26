import styled from 'styled-components'

export const Header = styled.div`
  background-color: black;
  z-index: 1000;
  display: flex;
  width: 100vw;
  position: fixed;
  top: 0%;
`
export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: rgb(94, 94, 94);
  background: linear-gradient(
    90deg,
    rgba(94, 94, 94, 1) 0%,
    rgba(0, 0, 0, 1) 10%,
    rgba(0, 0, 0, 1) 90%,
    rgba(94, 94, 94, 1) 100%
  );
`
export const Logo = styled.div`
  width: 100%;
  
`
export const NavBar = styled.div` 
  width: 80% ;
  font-size: 16px;
  color: white;
  display: flex;
  justify-content: space-around;


`
export const Link = styled.div``
export const NavLink = styled.div`
  margin-bottom: 24px;
  cursor: pointer;
`