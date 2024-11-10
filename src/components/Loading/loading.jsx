import { memo, useState, useEffect } from 'react';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './guttingaudio.png';

// Animaciones
const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const logoAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.5); 
  }
  50% {
    opacity: 1;
    transform: scale(1); 
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

// Estilos del contenedor
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeOut} 0.4s ease-in-out forwards;
  animation-delay: 2.0s;
`;

// Estilos del logo
const Logo = styled.img`
  width: 620px; 
  animation: ${logoAnimation} 2.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  @media (max-width: 768px) {
    width: 320px; 
  }
`;

const Loading = () => {
  // Estado para controlar si el loading está visible o no
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Después de 2.4 segundos (el tiempo de la animación de fadeOut + un poco más) ocultamos el contenedor
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2400);

    return () => clearTimeout(timer); // Limpieza del timer al desmontar
  }, []);

  // Si isVisible es false, no renderiza el contenedor
  if (!isVisible) return null;

  return (
    <Container>
      <Logo src={logo} alt="Loading logo" />
    </Container>
  );
};

export default memo(Loading);
