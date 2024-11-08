import React, { memo, useState, useEffect } from "react";
import Slider from "react-slick";
import styled, { keyframes } from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const arrowLeftUrl = "https://cdn.prod.website-files.com/6447bca571fb2820e0a009be/645e620bc4bd79638317564c_right-arrow.png";
const arrowRightUrl = "https://cdn.prod.website-files.com/6447bca571fb2820e0a009be/645e620bc4bd79638317564c_right-arrow.png";


const HomeCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

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
    draggable: false,
    swipe: false, // Desactiva swipe
    touchMove: false, // Desactiva movimiento táctil
    arrows: true,
    prevArrow: <ArrowStyle className="slick-prev" arrowUrl={arrowLeftUrl} />,
    nextArrow: <ArrowStyle className="slick-next" arrowUrl={arrowRightUrl} />,
    beforeChange: (oldIndex, newIndex) => {
      setIsExiting(true);
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setIsExiting(false);
      }, 200);
    },
  };

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
        <SlideTitle isExiting={isExiting} key={currentIndex}>
          {items[currentIndex].text}
        </SlideTitle>
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


  .slick-prev:before,
  .slick-next:before {
    display: none !important;
  }
  @media (max-width: 768px) {
    height: calc(100vh - 25vh);
  }
`;


const Slide = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.7); 
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
    max-width: 90%;
    left: 0px;
    bottom: 10vh;
  }
`;


const slideDownIn = keyframes`
  0% { transform: translateY(-200%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const slideDownOut = keyframes`
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(200%); opacity: 0; }
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
  white-space: normal;
  word-break: keep-all;

  animation: ${(props) => (props.isExiting ? slideDownOut : slideDownIn)} 0.8s ease forwards;

  @media (max-width: 768px) {
    margin-left: 10px;
    font-size: 15vw;
  }
`;


const ArrowStyle = styled.div`
top: 80vh!important;
left:400px !important;
  position: absolute !important;


  z-index: 10 !important;
  width: 65px !important;
  height: 45px !important;
  background-image: url(${(props) => props.arrowUrl}) !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  cursor: pointer !important;

  // Centraliza horizontalmente
  left: 50%;
  transform: translateX(-50%) !important;



  &.slick-prev {
    margin-right: 40px; // Espacio a la izquierda de la flecha derecha
    transform: translateX(-150%) translateY(-7%) rotate(180deg)  !important; // Desplaza y rota la flecha izquierda
  }

  &.slick-next {
    margin-left: 40px; // Espacio a la derecha de la flecha izquierda
  }






  @media (max-width: 768px) {
    top: 68vh!important;
left: 68vw !important;
width: 45px !important;


&.slick-prev {
    margin-right: 40px; // Espacio a la izquierda de la flecha derecha
    transform: translateX(-150%) translateY(-37%) rotate(180deg)  !important; // Desplaza y rota la flecha izquierda
  }
  }
`;
