import React, { memo, useState, useEffect, useRef } from "react";
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
  const sliderRef = useRef(null);
  

  const items = [
    {
      text: "Hebra & Vandermou - Tribalero",
      image: "/GTTNEP017.jpg",
      tag: "Release",
      link: "/releases/001",

    },
    {
      text: "Bad Legs - Metamorphosis LP",
      image: "/GTTNLP001.jpg",
      tag: "Release",
      link: "/releases/001",
    },
    {
      text: "MV - Time to Fly EP",
      image: "/GTTNEP016.jpg",
      tag: "Release",
      link: "/releases/001",
    },
    {
      text: "Merchandising",
      image: "/merchandising.jpg",
      tag: "News",
      link: "/releases/001",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    
    pauseOnHover: false,
    pauseOnFocus: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    arrows: false, 
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
      <Slider ref={sliderRef} {...settings} key={windowWidth}>
        {items.map((item, index) => (
          <Slide key={index} backgroundImage={item.image} />
        ))}
      </Slider>
      <FixedTextContainer>
        <Tag isExiting={isExiting} key={`tag-${currentIndex}`}>
          {items[currentIndex].tag}
        </Tag>
        <SlideTitle isExiting={isExiting} key={currentIndex}>
          {items[currentIndex].text}
        </SlideTitle>
      </FixedTextContainer>

      <ArrowButtonContainer>
        <MoreInfoButton href={items[currentIndex].link} target="_blank" rel="noopener noreferrer">
          More Info
        </MoreInfoButton>
        <ArrowStyle
          className="slick-prev"
          arrowUrl={arrowLeftUrl}
          onClick={() => sliderRef.current && sliderRef.current.slickPrev()} // Verifica que sliderRef.current no sea null
        />
        <ArrowStyle
          className="slick-next"
          arrowUrl={arrowRightUrl}
          onClick={() => sliderRef.current && sliderRef.current.slickNext()} // Verifica que sliderRef.current no sea null
        />
      </ArrowButtonContainer>
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
  filter: brightness(0.6); 
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
    bottom: 11vh;
  }
`;

const slideDownIn = keyframes`
  0% { transform: translateY(-200%);  }
  100% { transform: translateY(0);  }
`;

const slideDownOut = keyframes`
  0% { transform: translateY(0);  }
  100% { transform: translateY(200%);  }
`;

const Tag = styled.div`
  font-family: monospace;
  font-size: 1.0vw;
  color: #ffd700;
  margin: 0 0 10px 30px;
  text-transform: uppercase;
  line-height: 1;
  animation: ${(props) => (props.isExiting ? slideDownOut : slideDownIn)} 0.8s ease forwards;

  @media (max-width: 768px) {
    margin-left: 10px;
    font-size: 4vw;
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
  white-space: normal;
  word-break: keep-all;

  animation: ${(props) => (props.isExiting ? slideDownOut : slideDownIn)} 0.8s ease forwards;

  @media (max-width: 768px) {
    margin-left: 10px;
    font-size: 15vw;
  }
`;

const ArrowButtonContainer = styled.div`
  position: absolute;
  bottom: 4vh;
  left: 56px;

  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    bottom: 4vh;
    left: 1.4vh;
  }
`;

const MoreInfoButton = styled.a`

  padding: 10px 20px;
  font-size: 0.7vw;
  font-family: monospace;
  color: #ffffff;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid #ffffff;
  border-radius: 0;

  &:hover {
    background-color: #ffffff;
    color: #000;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 2.3vw;
  }
`;

const ArrowStyle = styled.div`


z-index: 10 !important;
  width: 40px !important;
  height: 40 auto !important;
  background-image: url(${(props) => props.arrowUrl}) !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  cursor: pointer !important;
  outline: none;
  -webkit-tap-highlight-color: transparent; 
 
;


  &.slick-prev {
    transform:translateX(220px) translateY(-40%) rotate(180deg) scale(1.8)  !important; 
   
  }

  &.slick-next {
    
    transform:translateX(240px) translateY(-39%) scale(1.8) !important; 
   
    
  }

  &:focus {
    outline: none; /* Asegura que el botón no tenga borde visible en foco */
  }

  @media (max-width: 768px) {
width: 39px !important;
left: 50vw;
padding: 0px 10px;


&.slick-prev {
 
    margin-right: 40px; 
    transform: translateX(-50%) translateY(-30%) rotate(180deg) scale(1.3) !important; 
    
    
  }

  &.slick-next {
    margin-right: 40px; 
    transform: translateX(140%) translateY(-30%) scale(1.3) !important; 
  }


  }
`;
