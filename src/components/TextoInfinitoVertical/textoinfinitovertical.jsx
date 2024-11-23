import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import estrella1 from './estrella1.png';
import estrella2 from './estrella4.png';
import estrella3 from './estrella1.png';


const InfoContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  height: 100vh;
  width: 8vw;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TextWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Texts = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 82vh;
`;

const TextItem = styled.div`
  font-family: 'kaneda-gothic-extrabold';
  font-size: 8vw;
  color: black;
  writing-mode: vertical-rl;
  margin-bottom: 20px;
  text-align: center;
  white-space: nowrap;
`;

const StarImage = styled.img`

  width: 40px;
  height: auto;
  margin-top: 2em;
  margin-bottom: 3em;

`;

const words = ['GUTTING RADIO','PODCAST','GUTTING RADIO','PODCAST'];

// Array con las diferentes imágenes de estrellas
const starImages = [estrella1, estrella2, estrella3];

const TextoInfinito = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const intercalatedWords = [];
  for (let i = 0; i < words.length; i++) {
    intercalatedWords.push(words[i]);
    if (i < words.length - 1 || i === words.length - 1) {
      // Seleccionar una imagen de estrella de forma secuencial
      const starImage = starImages[i % starImages.length];
      intercalatedWords.push(
        <StarImage 
          key={`star-${i}`} 
          src={starImage} 
          alt="estrella" 
          style={{ 
            transform: `translateY(${scrollPosition / 4}px) rotate(${scrollPosition * 0.2}deg)` 
          }} 
        />
      );
    }
  }

  const clonedWords = [...intercalatedWords, ...intercalatedWords];

  return (
    <InfoContainer>
      <TextWrapper>
        <Texts>
          {clonedWords.map((item, index) => (
            typeof item === 'string' ? (
              <TextItem key={index} style={{ transform: `translateY(${scrollPosition / 4}px)` }}>
                {item}
              </TextItem>
            ) : (
              <React.Fragment key={index}>
                {item}
              </React.Fragment>
            )
          ))}
        </Texts>
      </TextWrapper>
    </InfoContainer>
  );
};

export default TextoInfinito;
