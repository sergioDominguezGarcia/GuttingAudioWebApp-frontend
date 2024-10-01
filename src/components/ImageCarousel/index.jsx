import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { eps } from '../../constants/constants' // Asegúrate de importar los EPs

const CarouselContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  filter: blur(4px);
  background-repeat: no-repeat;
  transition: background-image 1s ease-in-out;
  z-index: -1; /* Para que esté detrás de otros elementos */
`

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % eps.length)
    }, 3000) // Cambia la imagen cada 3 segundos

    return () => clearInterval(intervalId)
  }, [])

  return (
    <CarouselContainer
      style={{ backgroundImage: `url(${eps[currentIndex].coverUrl})` }}
    />
  )
}

export default ImageCarousel
