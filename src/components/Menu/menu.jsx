import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components"; 
import { Link } from 'react-router-dom';

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
  margin-right: 5vw;
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

  &.open span:nth-child(1) {
    transform: rotate(45deg);
  }

  &.open span:nth-child(2) {
    opacity: 0;
    transform: translateX(20px);
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg);
  }


 @media (max-width: 768px) {
  margin-top: -16px;
  margin-right: 7vw;
  }


`;

const SiteNavigation = styled.div`
  height: 100%;
  right: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  visibility: hidden;
  transition: visibility 0.3s ease;

  &.menu__opend {
    visibility: visible;
  }

  .bg__menu {
    width: 100%;
    height: 100%;
    transform: translateY(-100%);
    transition: 0.3s ease all;
    background-color: #000000;
  }

  &.menu__opend .bg__menu {
    transform: translateY(0);
  }

  .menu__wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    
  }

  .the_menu {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-left: 0;
    text-align: right;
    padding-bottom: 70px;

    .menu_item {
      text-align: right;

      .menu-link {
        color: #ffffff;
        line-height: 0.8;
        font-size: 11vw;
        text-decoration: none;
          font-family: kaneda-gothic-extrabold;
        text-transform: uppercase;
        display: block;
        padding-right: 4vw;
        margin: 15px 0;

        @media (min-width: 768px) {
          font-size: 48px;
        }

        &:hover {
          color: var(--text-color-3);
        }
      }
    }
  }

  .menu_footer {
    bottom: 0;
    color: #ffffff;
    font-size: 11px;
    font-family: 'Kanit-ExtraBold';
    backdrop-filter: blur(10px); 
    opacity: 0;
    transition: opacity 0.8s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    padding: 3px;
  }

  &.menu__opend .menu_footer {
    opacity: 1;
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
        className={`burger-button ${isOpen ? 'open' : ''} ${isActive ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </BurgerButton>

      <SiteNavigation className={`site__navigation ${isOpen ? "menu__opend" : ""}`}>
        <div className="bg__menu">
          <div className="menu__wrapper">
            <ul className="the_menu">
              <li className="menu_item">
                <Link onClick={toggleMenu} to="/*" className="menu-link">HOME</Link>
              </li>
              <li className="menu_item">
                <Link onClick={toggleMenu} to="/releases" className="menu-link">RELEASES</Link>
              </li>
              <li className="menu_item">
                <Link onClick={toggleMenu} to="/artists" className="menu-link">ARTISTS</Link>
              </li>
              <li className="menu_item">
                <Link onClick={toggleMenu} to="/radio" className="menu-link">GUTTING RADIO</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={`menu_footer ${isOpen ? "menu__opend" : ""}`}>
          <p></p>
        </div>
      </SiteNavigation>
    </Container>
  );
};

export default Headermain;