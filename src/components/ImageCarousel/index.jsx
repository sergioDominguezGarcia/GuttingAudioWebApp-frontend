import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { eps } from '../../constants/constants' // Asegúrate de importar los EPs

const CarouselContainer = styled.div`
  position: absolute; /* Cambiado a absoluto para que ocupe el fondo */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* Ocupa todo el alto de la ventana */
  overflow: hidden;
  z-index: -1; /* Asegúrate de que esté detrás de otros elementos */
`

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.active ? 1 : 0)};
`

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % eps.length) // Cambia de índice cada 3 segundos
    }, 3000) // Cambia de imagen cada 3000ms (3 segundos)

    return () => clearInterval(intervalId) // Limpiar el intervalo al desmontar el componente
  }, [])

  return (
    <CarouselContainer>
      {eps.map((ep, index) => (
        <CarouselImage
          key={ep.id}
          src={ep.coverUrl}
          alt={ep.title}
          active={currentIndex === index} // Controla la visibilidad de las imágenes
        />
      ))}
    </CarouselContainer>
  )
}

export default ImageCarousel
