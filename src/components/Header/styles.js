import styled from 'styled-components'


export const Header = styled.div`
  background-color: black;
  z-index: 1000;
  display: flex;
  width: 100vw;
  position: fixed;
  top: ${(props) =>
    props.isVisible ? '0' : '-100px'}; 
  transition: top 0.3s ease-in-out; 



`

export const Content = styled.div`
  display: flex;
  width: 100vw;

  align-items: center;

  justify-content: center; 


  @media (max-width: 768px) {
   
 
  }

`

export const Logo = styled.div`
z-index: 50;
  margin-top: 8px;
  
 
  cursor: pointer; 
  img {
    max-width: 9vw;

    @media (max-width: 768px) {
      margin-top: -2px;
      max-width: 32vw;
    }

    @media (min-width: 769px) and (max-width: 1700px) {
      margin-top: -2px;
      max-width: 67vw;
    }
 
  }
`


export const NavBar = styled.div`
  width: 100%;

  color: white;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  font-size: 14px;



  @media (max-width: 968px) {
   
   
    
  
   
  }
`

export const NavLink = styled.div`

display: none;

  cursor: pointer;

  @media (max-width: 768px) {

  }
`

export const Link = styled.div`

 margin-top: 30px;




`
