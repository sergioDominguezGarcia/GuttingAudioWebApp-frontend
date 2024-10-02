import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { eps } from '../../constants/constants' // Asegúrate de importar los EPs

const CarouselContainer = styled.div`
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0.5130427170868348) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  filter: saturate (3); 

  transition: background-image 1s ease-in-out;
  z-index: -1; 
`

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % eps.length)
    }, 2000) // Cambia la imagen cada 3 segundos

    return () => clearInterval(intervalId)
  }, [])

  return (
    <CarouselContainer
      style={{ backgroundImage: `url(${eps[currentIndex].coverUrl})` }}
    />
  )
}

export default ImageCarousel
