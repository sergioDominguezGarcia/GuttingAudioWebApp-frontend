import React, { memo } from 'react';
import styled from 'styled-components';
import Contacto from '../../components/Contact/contact'

const Container = styled.div`
  margin-top: 8vh;
  display: flex;
  flex-direction: column;
  padding: 2vw 2.6vw;
  height: 100%;

  @media (max-width: 768px) {
    padding: 4vw 4vw 4vw 4vw;
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 1px); 
  background-image: url('Mastering/3.jpg');
  background-size: cover;
  background-position: center;
  filter: opacity(0.2);
  z-index: -1;
`;

const Description = styled.p`
  font-size: 3.5rem;
  color: #e0e0e0;
  font-family: 'kaneda-gothic-extrabold';
  margin: 1vw 0vw 0vw 0vw;

  @media (max-width: 768px) {
    margin: 4vw 0vw 4vw 0vw;
    font-size: 2.0rem;
  }
`;

const LineSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
  margin-bottom: 8px;
`;

const Title = styled.h1`
  color: #ffffff; 
  text-decoration: none;
  font-family: 'kaneda-gothic-extrabold';
  text-transform: uppercase;
  display: block;
  margin: 0;
  font-size: 5vw;

  @media (max-width: 768px) {
    font-size: 9vw;
  }
`;

const Contact = () => {
  return (
    <>
      <Background />
      <Container>
        <Title>CONTACT</Title>
        <LineSeparator />
        <Description>
        info@guttingaudio.com  <br></br>

        679 89 31 44
        </Description>

     

       <Contacto/>

      </Container>
    </>
  );
};

export default memo(Contact);
