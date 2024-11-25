import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';


const slideInFromBelow = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5vw 2.5vw 4vw 2.5vw;
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  overflow: hidden;
  background-color: black;
  z-index: 10;
`;

const InfoColumnPie = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'shouldAnimate',
})`
  display: flex;
  justify-content: space-between;

  ${({ shouldAnimate }) =>
    shouldAnimate &&
    css`
      animation: ${slideInFromBelow} 1.5s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
    `}

  @media (max-width: 768px) {
    padding: 4vw 2.5vw 4vw 2.5vw;
  }
`;

const Columna = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ColumnaDerecha = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
 
`;

const lineAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const FooterLink = styled(Link)`
  font-family: 'kaneda-gothic-extrabold';
  color: #9b9b9b;
  margin: 0;
  padding: 0.5vw 0;
  font-size: 2.5vw;
  line-height: 0.5;
  position: relative;
  text-decoration: none;
  transition: color 0.2s ease;


  @media (max-width: 768px) {
    color: #ffffff;
    font-size: 7vw;
    margin-top: 5px;
    line-height: 0.8;
  }

  &:hover {
    color: #ffffff;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    background: #d8d8d8;
    width: 0;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
    animation: ${lineAnimation} 0.3s forwards;
  }
`;

const RedesSociales = styled.p`
  font-family: 'kaneda-gothic-LIGHT';
  color: #9b9b9b;
  margin: 0;
  padding: 0vw 0;
  font-size: 1.5vw;
  position: relative;
  transition: color 0.2s ease;
  line-height: 1.6;


  @media (max-width: 768px) {
    color: #ffffff;
    font-size: 5vw;
    margin-top: 0px;
  }

  &:hover {
    color: #ffffff;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    background: #d8d8d8;
    width: 0;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
    animation: ${lineAnimation} 0.3s forwards;
  }
`;
const Enlace = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Copyright = styled.div`
  font-family: 'kaneda-gothic-LIGHT';
  font-size: 0.7vw;
  position: absolute;
  bottom: 1vw;
  left: 2.5vw;
  letter-spacing: 0.1vw; 
  color: #ffffff;

  @media (max-width: 768px) {
    letter-spacing: 0.3vw; 
    font-size: 3vw;
    left: 5vw;
  }
`;

const TituloPrincipal = () => {
  return (
    <InfoContainer>
      <InfoColumnPie>
        <Columna>
          <FooterLink to="/">NEWS</FooterLink>
          <FooterLink to="/radio">GUTTING RADIO</FooterLink>
          <FooterLink to="/mixingmastering">MIXING MASTERING</FooterLink>
       
        </Columna>

        <Columna>

        <FooterLink to="/releases">RELEASES</FooterLink>
        <FooterLink to="/artists">ARTISTS</FooterLink>
        
       
        </Columna>


      


        <ColumnaDerecha>
          <Enlace href="https://www.instagram.com/gttnaudio/" target="_blank" rel="noopener noreferrer">
            <RedesSociales>+ INSTAGRAM</RedesSociales>
          </Enlace>
          <Enlace href="https://soundcloud.com/gutting-audio" target="_blank" rel="noopener noreferrer">
            <RedesSociales>+ SOUNDCLOUD</RedesSociales>
          </Enlace>
          <Enlace href="https://www.beatport.com/label/gutting-audio/85715?srsltid=AfmBOopuZ8oplwdX91tEwFdH9OwRqFDm03NuZoN9fVoXxqZm34SkkPRk" target="_blank" rel="noopener noreferrer">
            <RedesSociales>+ BEATPORT</RedesSociales>
          </Enlace>
        </ColumnaDerecha>
      </InfoColumnPie>
      <Copyright>© 2024 Gutting Audio. All rights reserved.</Copyright>
    </InfoContainer>
  );
};

export default TituloPrincipal;
