import React, { memo, useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
 
  const items = [
    {
      text: "GTTNEP017 Hebra & Vandermou - Tribalero",
      image: "/GTTNEP017.jpg",
    },
    {
      text: "GTTNLP001 Bad Legs - Metamorphosis LP",
      image: "/GTTNLP001.jpg",
    },
    {
      text: "GTTNEP016 MV - Time to Fly EP",
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
          <Slide key={index} backgroundImage={item.image}>
            <SlideContent>
              <SlideTitle>{item.text}</SlideTitle>
            </SlideContent>
          </Slide>
        ))}
      </Slider>
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;             
  width: 100%;              
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;    
  background-position: center;
  background-repeat: no-repeat;

`;


const SlideContent = styled.div`
  padding: 20px;
  border-radius: 5px;
  text-align: left;
  position: absolute;
  bottom: 25vh;
  justify-content: center;
  align-items: flex-start;
  max-width: 5%; /* Limita el ancho máximo del contenedor */
  width: 100%;
  box-sizing: border-box; /* Incluye el padding en el ancho total */

  @media (max-width: 768px) {
    max-width: 9%; /* Ajusta el ancho máximo en pantallas pequeñas */
  }
`;

const SlideTitle = styled.h3`
  font-size: 3vw;
  color: #f5f5f5;
  margin: 0;
  z-index: 1;
  text-transform: uppercase;
  line-height: 1.2;
  overflow-wrap: break-word; /* Permite ajustar palabras largas al ancho del contenedor */
  word-break: break-word; /* Divide palabras solo cuando es necesario */

  @media (max-width: 768px) {
    font-size: 6vw; /* Ajusta el tamaño de la fuente para pantallas pequeñas */
  }
`;
