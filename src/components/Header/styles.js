import styled from 'styled-components'

// Estilo para el header con transición de visibilidad
export const Header = styled.div`
  background-color: black;
  z-index: 1000;
  display: flex;
  width: 100vw;
  position: fixed;
  top: ${(props) =>
    props.isVisible ? '0' : '-100px'}; /* Esconder y mostrar con scroll */
  transition: top 0.3s ease-in-out; /* Transición suave */


`

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;



  @media (max-width: 768px) {
   
 
  }

`

export const Logo = styled.div`
  text-align: center;
  margin-top: 12px;
  img {
    max-width: 150px;


    @media (max-width: 768px) {
      max-width: 120px;
    }
  }
`

export const NavBar = styled.div`
  width: 100%;
  margin-right: 7vw;
  font-size: 16px;
  color: white;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  font-size: 14px;

  @media (max-width: 968px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  
    display: none;
  }
`

export const NavLink = styled.div`

  cursor: pointer;

  @media (max-width: 768px) {

  }
`

export const Link = styled.div`
 margin-left: 25px;
 margin-top: 30px;




`
