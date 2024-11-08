import { memo, useState, useEffect } from 'react';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './guttingaudio.png'; // Ajusta la ruta según tu estructura de carpetas

// Animación para que el fondo desaparezca gradualmente
const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

// Animación para que el logo aparezca con una curva de movimiento natural
const logoAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.5); /* Inicia más grande */
  }
  50% {
    opacity: 1;
    transform: scale(1); /* Se reduce al tamaño normal */
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

// Contenedor que ocupa toda la pantalla con fondo negro
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
  z-index: 999;
  animation: ${fadeOut} 0.4s ease-in-out forwards;
  animation-delay: 2.0s; /* Se desvanece después de 2 segundos */
`;

// Estilo para el logo con animación natural
const Logo = styled.img`
  width: 620px; /* Tamaño inicial */
  animation: ${logoAnimation} 2.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  @media (max-width: 768px) {

    width: 320px; /* Tamaño inicial */
  }
`;

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Ocultar el componente después de que la animación termine (3.5 segundos en total)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);
    return () => clearTimeout(timer); // Limpieza del temporizador al desmontar el componente
  }, []);

  // Renderizar solo si isVisible es verdadero
  return (
    isVisible && (
      <Container>
        <Logo src={logo} alt="Loading logo" />
      </Container>
    )
  );
};

export default memo(Loading);
