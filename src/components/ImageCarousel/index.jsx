import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import cover1 from './covers/cover1.png'
import cover2 from './covers/cover2.png'
import cover3 from './covers/cover3.png'
import cover4 from './covers/cover4.png'
import cover5 from './covers/cover5.png'
import cover6 from './covers/cover6.png'
import cover7 from './covers/cover7.png'
import cover8 from './covers/cover8.png'
import cover9 from './covers/cover9.png'
import cover10 from './covers/cover10.png'
import cover11 from './covers/cover11.png'
import cover12 from './covers/cover12.png'
import cover14 from './covers/cover14.png'
import cover15 from './covers/cover15.png'
import cover16 from './covers/cover16.png'
import cover17 from './covers/cover17.png'
import cover18 from './covers/cover18.png'
import cover19 from './covers/cover19.png'
import cover20 from './covers/cover20.png'
import cover21 from './covers/cover21.png'
import cover22 from './covers/cover22.png'



const CarouselContainer = styled.div`
  position: fixed; /* Cambiado de absolute a fixed */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: -1;
  
`

const CarouselImage = styled.div`
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  filter: blur(5px) brightness(0.4);
  background-position: center;
  position: absolute;
  width: 100%;
  height: 100vh;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 1s ease-in-out;

`

const imageUrls = [
  cover1,
  cover2,
  cover3,
  cover4,
  cover5,
  cover6,
  cover7,
  cover8,
  cover9,
  cover10,
  cover11,
  cover12,
  cover14,
  cover15,
  cover16,
  cover17,
  cover18,
  cover19,
  cover20,
  cover21,
  cover22,
]
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length)
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <CarouselContainer>
      {imageUrls.map((url, index) => (
        <CarouselImage
          key={index}
          url={url}
          isActive={index === currentIndex}
        />
      ))}
    </CarouselContainer>
  )
}

export default ImageCarousel
