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
    flex-direction: column;
    padding: 10px 0;
  }
`

export const Logo = styled.div`
  width: 100%;
  text-align: center;
  img {
    max-width: 150px;
    height: auto;

    @media (max-width: 768px) {
      max-width: 120px;
    }
  }
`

export const NavBar = styled.div`
  width: 90%;
  font-size: 16px;
  color: white;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
  }
`

export const NavLink = styled.div`

  cursor: pointer;

  @media (max-width: 768px) {

  }
`

export const Link = styled.div`
 margin-left: 30px;
 margin-top: 15px;




`
