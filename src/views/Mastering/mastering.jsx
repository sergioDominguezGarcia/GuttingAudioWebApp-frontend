import { memo } from 'react';
import styled from 'styled-components';

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
  height: calc(100vh - 1px); /* Ajusta con un pequeño margen */

  background-image: url('Mastering/4.jpg');
  background-size: cover;
  background-position: center;
  filter: opacity(0.3);
  z-index: -1;
`;


const Title = styled.h1`
  color: #ffffff; 
  text-decoration: none;
  font-family: 'kaneda-gothic-extrabold';
  text-transform: uppercase;
  display: block;
 
  margin: 0vw 0vw 0vw 0vw;
  font-size: 5vw;
 
 
  @media (max-width: 768px) {
    margin: 0vw 0vw 0vw 0vw;
    font-size: 9vw;
   
  }



  
`;


const Description = styled.p`
 font-size: 2.0rem;

  /* line-height: 1; */
  color: #e0e0e0;
  font-family: 'kaneda-gothic-light';
 
  @media (max-width: 768px) {
 
    margin: 4vw 0vw 4vw 0vw;
    font-size: 1.5rem;

}
`;


const Section = styled.div`
  margin: 0vw 0;
`;

const SectionTitle = styled.h3`
font-family: 'kaneda-gothic-extrabold';

  font-size: 3.8rem;
  text-transform: uppercase;
  color: #ffffff;

  margin: 0vw 0vw 0vw 0vw;

  @media (max-width: 768px) {

font-size: 1.8rem;
 margin: 2vw 0vw 0vw 0vw;
}

`;


const SectionTitle2 = styled.h3`
font-family: 'kaneda-gothic-extrabold';
color: #ffffff;
  font-size: 2.8rem;
  text-transform: uppercase;
 

  margin: 1vw 0vw 0vw 0vw;

  @media (max-width: 768px) {

font-size: 1.5rem;
 margin: 1vw 0vw 0vw 0vw;

}

`;



const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 2.0rem;
  margin: 1.5vw 0vw 1.5vw 0vw;

  @media (max-width: 768px) {

    margin: 4vw 0vw 4vw 0vw;
    font-size: 1.5rem;
}

`;





const ListItem = styled.li`

  font-size: 2.0rem;
  color: #e0e0e0;
  font-family: 'kaneda-gothic-light';
  line-height: 1.2; 
  list-style: none;


  span {
    color: #ffffff;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    line-height: 1; 
    margin: 0.3rem 0;
    font-size: 1.5rem;

}

`;




const EquipmentList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
 margin-bottom: 30px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const EquipmentItem = styled.div`
  font-size: 1rem;
  line-height: 1.4;

  strong {
    color: #ffffff;
  }
`;

const LineSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
 margin-bottom: 8px;
 
`;

const Mastering = () => {
  return (
    <>
    <Background />
    <Container>
      <Title>Mixing Mastering Service</Title>
  
      <LineSeparator />

      <Description>
        En Gutting Audio, ofrecemos servicios de mezcla y mastering de alta calidad respaldados por más de 10 años de experiencia en la industria musical. Nuestro enfoque es transformar tu proyecto y llevarlo al siguiente nivel, ya sea a través de un proceso de mixing, mastering o ajustes de producción específicos.
      </Description>

      <Section>
        <SectionTitle>¿Por qué elegirnos?</SectionTitle>
        <Description>
          Nuestro compromiso es ofrecer un servicio personalizado desde el primer momento. Cada cliente tiene una conexión directa con el profesional encargado del proyecto, garantizando que la visión del artista o productor sea siempre la prioridad. Nuestro equipo, con experiencia trabajando con artistas de renombre como <strong>Mala Rodríguez</strong>, <strong>Yung Beef</strong> o <strong>Kidd Keo</strong>, asegura un trabajo de calidad adaptado a tus necesidades.
        </Description>
      </Section>

      <Section>
        <SectionTitle>Servicios disponibles</SectionTitle>
        <List>
          <ListItem>Mastering de matriz Stereo – <span>40 €</span></ListItem>
          <ListItem>Mastering por Stems (hasta 6 stems) – <span>65 €</span></ListItem>
          <ListItem>Mezcla (hasta 20 pistas) – <span>150 €</span> (pistas adicionales: <strong>5 €</strong>)/pista</ListItem>
          <ListItem>Arreglo de Voces (afinación + edición) – <span>30 €</span> por pista</ListItem>
          <ListItem>Arreglos de Producción – <span>20 €</span> por edición</ListItem>
          <ListItem>Arreglos de Proyectos (hasta 20 pistas) – <span>130 €</span></ListItem>
          <ListItem>Mezcla + Mastering (hasta 20 pistas) – <span>180 €</span></ListItem>
          <ListItem>Arreglo de Conjunto Vocal – <span>80 €</span></ListItem>
          <ListItem>Mastering y Leveling de DJ Set - <span>40 €</span></ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Equipos de alta gama</SectionTitle>
        <EquipmentList>
          <EquipmentItem>
            <SectionTitle2>Workstation:</SectionTitle2>
            <ListItem>Mac Studio M1 Max, OS Ventura, Avid Pro Tools 2024, Ableton Live 12, iZotope RX 11</ListItem>
          </EquipmentItem>
          <EquipmentItem>
            <SectionTitle2>Outboard:</SectionTitle2>
            <ListItem>CAPI LP-28 (Litz Mod), AML EZ-1073-500, Tech 21 NYC SansAmp RBI, Furman Lx10</ListItem>
          </EquipmentItem>
          <EquipmentItem>
            <SectionTitle2>Monitoreo:</SectionTitle2>
            <ListItem>Lynx Aurora 8, Presonus Quantum 2626, Adam A77X, Avantone MixCubes Active, AKG K 702, Audeze MM - 100</ListItem>
          </EquipmentItem>
          <EquipmentItem>
            <SectionTitle2>Plugins:</SectionTitle2>
            <ListItem>Plugin Alliance All, NewFangled Elevate, Waves All, Soundtoys All, iZotope All, Antares Autotune, Celemony Melodyne 5, FabFilter All, McDSP</ListItem>
          </EquipmentItem>
        </EquipmentList>
      </Section>

      <SectionTitle2>
        Si buscas un sonido profesional y una atención personalizada, Gutting Audio es tu opción. ¡Hablemos de tu proyecto y llevémoslo al siguiente nivel!
      </SectionTitle2>
    </Container>
    </>
  );
};

export default memo(Mastering);
