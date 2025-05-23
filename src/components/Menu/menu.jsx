import React, { useState, useEffect } from "react";
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
    -webkit-tap-highlight-color: transparent; 

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
    padding: 25vw 4vw ;
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
  font-size: 6.0vh;
  text-decoration: none;
  font-family: kaneda-gothic-extrabold;
  text-transform: uppercase;
  display: block;
  position: relative;
  opacity: 0;
  animation: ${({ isOpen }) => (isOpen ? fadeIn : 'none')} 0.2s forwards 0.3s;
  transition: color 0.2s ease;

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
    width: 100%;
    transition: width 0.3s ease;
    animation: ${({ isOpen }) => (isOpen ? lineAnimation : 'none')} 0.6s forwards 0.4s;
  }

  @media (min-width: 768px) {
    font-size: 6.0vh;
    line-height: 1.5;

    &:hover {
      color: #ffffff;
    }
  }

  @media (max-width: 768px) {
    color: #ffffff; /* For mobile, links stay white */
    &:hover {
      color: #ffffff; /* Hover does not change color */
    }
  }
`;

const MenuFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 3px;
  color: #ffffff;
  font-size: 11px;
  font-family: 'Kanit-ExtraBold';
  backdrop-filter: blur(10px); 
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(100%)')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: transform 0.6s ease, opacity 0.6s ease;
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

const RedesSocialesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vw 3vw; 

  @media (max-width: 768px) {
    padding: 2vw 4vw; 
    }


`;

const EnlaceRedSocial = styled.a`
  font-family: 'kaneda-gothic-LIGHT';
  color: #9b9b9b;
  font-size: 3vh;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }

  @media (min-width: 768px) {
    font-size: 1.8vw;
    color: #9b9b9b;

    &:hover {
      color: #ffffff; /* Hover effect for PC */
    }
  }

  @media (max-width: 768px) {
    color: #ffffff; /* Always white on mobile */

    &:hover {
      color: #ffffff; /* No hover effect on mobile */
    }
  }
`;

const InstallButton = styled.button`
 font-family: kaneda-gothic-extrabold;
  color: #9b9b9b;
  font-size: 7vw;
  text-decoration: none;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
  display: ${({ isMobile }) => (isMobile ? "block" : "none")};
  padding: 0; 
  text-align: left;
  margin-bottom: 20px; /* Separación del resto del contenido */
  margin-left: 20px;
  &:hover {
    color: #ffffff;
  }

  @media (min-width: 768px) {
    font-size: 1.8vw;
    display: none; /* Ocultar en pantallas mayores a móvil */
  }

  @media (max-width: 768px) {
    color: #ffffff; /* Siempre blanco en móvil */

    &:hover {
      color: #ffffff; /* Sin cambio de color en hover para móvil */
    }
  }
`;


const Headermain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isMobile, setIsMobile] = useState(false);


 
  // Detectar si es móvil
  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("El usuario aceptó la instalación");
        } else {
          console.log("El usuario rechazó la instalación");
        }
        setDeferredPrompt(null);
      });
    } else {
      alert("La instalación no está disponible en este momento.");
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
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
                <MenuLink onClick={toggleMenu} to="/" isOpen={isOpen}>NEWS</MenuLink>
              </MenuItem>

              <MenuItem>
                <MenuLink onClick={toggleMenu} to="/releases" isOpen={isOpen}>RELEASES</MenuLink>
              </MenuItem>

              <MenuItem>
                <MenuLink onClick={toggleMenu} to="/artists" isOpen={isOpen}>ARTISTS</MenuLink>
              </MenuItem>

              <MenuItem>
                <MenuLink onClick={toggleMenu} to="/radio" isOpen={isOpen}>GUTTING RADIO</MenuLink>
              </MenuItem>

              <MenuItem>
                <MenuLink onClick={toggleMenu} to="/events" isOpen={isOpen}>EVENTS</MenuLink>
              </MenuItem>

              <MenuItem>
                <MenuLink onClick={toggleMenu} to="/mixingmastering" isOpen={isOpen}>MIXING MASTERING</MenuLink>
              </MenuItem>

              <MenuItem>
                <MenuLink onClick={toggleMenu} to="/youtube" isOpen={isOpen}>YouTube</MenuLink>
              </MenuItem>


 


            </TheMenu>


          </MenuWrapper>
        </BgMenu>

        <MenuFooter isOpen={isOpen}>
        <InstallButton onClick={handleInstallClick} isMobile={isMobile}>
    {/* + AÑADIR APP */}
  </InstallButton>

          <RedesSocialesContainer>
            <EnlaceRedSocial href="https://www.instagram.com/gttnaudio/" target="_blank" rel="noopener noreferrer">
              + INSTAGRAM
            </EnlaceRedSocial>
            <EnlaceRedSocial href="https://soundcloud.com/gutting-audio" target="_blank" rel="noopener noreferrer">
              + SOUNDCLOUD
            </EnlaceRedSocial>
            <EnlaceRedSocial href="https://www.beatport.com/label/gutting-audio/85715?srsltid=AfmBOopuZ8oplwdX91tEwFdH9OwRqFDm03NuZoN9fVoXxqZm34SkkPRk" target="_blank" rel="noopener noreferrer">
              + BEATPORT
            </EnlaceRedSocial>

            <EnlaceRedSocial as={Link} to="/contact" onClick={toggleMenu}>
      + CONTACT
    </EnlaceRedSocial>
          </RedesSocialesContainer>
        </MenuFooter>

      </SiteNavigation>
    </Container>
  );
};

export default Headermain;
