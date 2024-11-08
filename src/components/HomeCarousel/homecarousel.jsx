import React, { memo, useState, useEffect } from "react";
import Slider from "react-slick";
import styled, { keyframes } from "styled-components"; // Importa keyframes

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentIndex, setCurrentIndex] = useState(0); 

  
 
  const items = [
    {
      text: "Hebra & Vandermou - Tribalero",
      image: "/GTTNEP017.jpg",
    },
    {
      text: "Bad Legs - Metamorphosis LP",
      image: "/GTTNLP001.jpg",
    },
    {
      text: "MV - Time to Fly EP",
      image: "/GTTNEP016.jpg",
    },
    {
      text: "Merchandising",
      image: "/merchandising.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, 
    pauseOnHover: false,  
    pauseOnFocus: false,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex), // Actualiza el índice antes de cambiar de slide

    
  };


   // Solo actualiza el ancho de la ventana cuando es necesario, sin reiniciar el carrusel
   useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  return (
    <CarouselContainer>
      <Slider {...settings} key={windowWidth}>
        {items.map((item, index) => (
          <Slide key={index} backgroundImage={item.image} />
        ))}
      </Slider>
      <FixedTextContainer>
      
        <SlideTitle key={currentIndex}>{items[currentIndex].text}</SlideTitle>
      </FixedTextContainer>
    </CarouselContainer>
  );
};

export default memo(HomeCarousel);



const CarouselContainer = styled.div`
  width: calc(100% - 3vw);  
  max-width: 100%;
  height: calc(100vh - 12vh);
  margin: 75px auto;       
  color: #ff0000;
  overflow: hidden;
  position: relative;
  
`;


const Slide = styled.div`

  height: 100vh;             
  width: 100%;              
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;    
  background-position: center;
  background-repeat: no-repeat;

`;


const FixedTextContainer = styled.div`
  position: absolute;
  bottom: 14vh;
  left: 20px;
  z-index: 2;
  max-width: 50%;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;   

  @media (max-width: 768px) {
    max-width: 50%;
    left: 10px;
  }
`;


// Define la animación de deslizamiento hacia abajo
const slideDown = keyframes`
  0% {
    
    transform: translateY(-200%);
  }
  100% {
    
    transform: translateY(0);
  }
`;


const SlideTitle = styled.h3`
  font-family: kaneda-gothic-extrabold;
  font-size: 8vw;
  color: #f5f5f5;
  margin: 0;
  margin-left: 30px;
  z-index: 1;
  text-transform: uppercase;
  line-height: 0.8;
  white-space: normal;         /* Permite ajustar el texto */
  word-break: keep-all;        /* Evita que las palabras largas se dividan */
     
  
  animation: ${slideDown} 0.8s ease forwards;

  @media (max-width: 768px) {
    margin-left: 10px;
    font-size: 12vw;
  }
`;