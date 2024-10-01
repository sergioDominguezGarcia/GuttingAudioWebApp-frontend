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
  background: darkgray;
  background: linear-gradient(
    90deg,
    rgba(50, 50, 50, 1) 0%,
    rgba(0, 0, 0, 1) 10%,
    rgba(0, 0, 0, 1) 90%,
    rgba(94, 94, 94, 1) 100%
  );

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
  width: 80%;
  font-size: 16px;
  color: white;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
  }
`

export const NavLink = styled.div`
  margin-bottom: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`

export const Link = styled.div`
  /* Estilo adicional para los links si es necesario */
`
