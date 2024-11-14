import React, { useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components"; 
import { Link } from 'react-router-dom';
import Gutting from '../../assets/Gutting.jpg'




const Container = styled.header`
  position: relative;
  z-index: 99999;
`;

const BurgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 35px;
  height: 35px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  position: absolute;
  right: 0px;
  margin-top: -16px;
  margin-right: 2.7vw;
  z-index: 99999999;

  &:focus {
    outline: none;
  }

  span {
    display: block;
    width: 100%;
    height: 1px;
    background: #ffffff;
    border-radius: 10px;
    transition: all 0.3s ease;
    position: relative;
    transform-origin: 1px;
  }

  ${({ isOpen }) => isOpen && `
    span:nth-child(1) {
      transform: rotate(45deg);
    }
    span:nth-child(2) {
      opacity: 0;
      transform: translateX(20px);
    }
    span:nth-child(3) {
      transform: rotate(-45deg);
    }
  `}

  @media (max-width: 768px) {
    margin-top: -16px;
    margin-right: 3vw;
  }
`;

const SiteNavigation = styled.div`
  height: 100%;
left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: visibility 0.3s ease;
`;

const BgMenu = styled.div`
  width: 100%;
  height: 100%;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  transition: 0.4s ease all;
  background-color: #000000;
`;

const MenuWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const TheMenu = styled.ul`
  top: 100px auto;
  bottom: 100px auto;
 
  padding: 5vw 3vw ; 
  list-style: none; 
  @media (max-width: 768px) {
    padding: 47vw 4vw ;
  }
`;

const MenuItem = styled.li`
 
`;

const lineAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MenuLink = styled(Link)`
  color: #9b9b9b;
  line-height: 1.2;
  font-size: 18vw;
  text-decoration: none;
  font-family: kaneda-gothic-extrabold;
  text-transform: uppercase;
  display: block;
  position: relative;
  
  opacity: 0;
  animation: ${({ isOpen }) => (isOpen ? fadeIn : 'none')} 0.2s forwards 0.3s; 

  color: #9b9b9b;
  transition: color 0.2s ease;

  &:hover {
   
    color: #ffffff;
    transition: color 0.2s ease; 
  }

  &:not(:hover) {
   
    color: #9b9b9b;
    transition: color 0.3s ease 0s;  
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    background: #d8d8d8;
 
    transition: width 0.3s ease;
    animation: ${({ isOpen }) => (isOpen ? lineAnimation : 'none')} 0.6s forwards 0.4s; 
  }

  &:not(:last-child) {
    padding-bottom: 10px;
  }

  @media (min-width: 768px) {
    font-size: 4.5vw;
    line-height: 1.5;
  }
`;





const MenuFooter = styled.div`
  bottom: 0;
  color: #ffffff;
  font-size: 11px;
  font-family: 'Kanit-ExtraBold';
  backdrop-filter: blur(10px); 
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity 0.8s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  padding: 3px;
`;



const Logo = styled.div`
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  cursor: pointer;


  opacity: 0; 
  animation: ${({ isOpen }) => (isOpen ? fadeIn : 'none')} 0.5s forwards 0.3s; 

  img {
    max-width: 190px;

    @media (max-width: 768px) {
      max-width: 130px;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  body.ovhidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
  }
`;

const Headermain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
      document.body.classList.add("ovhidden");
    } else {
      document.body.classList.remove("ovhidden");
    }

    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 2000);
  };

  return (
    <Container>
      <GlobalStyle />
      <BurgerButton
        isOpen={isOpen}
        className={`${isActive ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </BurgerButton>

      <SiteNavigation isOpen={isOpen}>
        <BgMenu isOpen={isOpen}>
          <MenuWrapper>


          <Logo isOpen={isOpen}>
  <img src={Gutting} width="220px" alt="Logo" />
        </Logo>

        <TheMenu>
  <MenuItem>
    <MenuLink onClick={toggleMenu} to="/" isOpen={isOpen}>HOME</MenuLink>
  </MenuItem>
  <MenuItem>
    <MenuLink onClick={toggleMenu} to="/releases" isOpen={isOpen}>RELEASES</MenuLink>
  </MenuItem>
  {/* <MenuItem>
    <MenuLink onClick={toggleMenu} to="/artists" isOpen={isOpen}>ARTISTS</MenuLink>
  </MenuItem> */}
  <MenuItem>
    <MenuLink onClick={toggleMenu} to="/radio" isOpen={isOpen}>GUTTING RADIO</MenuLink>
  </MenuItem>
</TheMenu>




          </MenuWrapper>
        </BgMenu>

        <MenuFooter isOpen={isOpen}>
          <p></p>
        </MenuFooter>
      </SiteNavigation>
    </Container>
  );
};

export default Headermain;
