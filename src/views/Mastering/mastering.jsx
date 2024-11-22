import { useEffect, useState, memo } from 'react';
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

const CarouselContainer = styled.div`
position: absolute;;
  display: flex;
  justify-content: flex-end; /* Alínea el carrusel a la derecha */
  width: 100%;
  height: ${({ height }) => height || 'auto'}; /* Permite definir la altura desde las props */

  @media (max-width: 1200px) {
    display: none; /* Oculta el carrusel en dispositivos menores a 1200px */
  }
`;

const Carousel = styled.div`
margin-top: 9%;
margin-right: 5%;
  width: 48%; /* Tamaño del carrusel */
  height: 100%;
  display: flex;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const CarouselItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;

  &.active {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContainerHalf = styled.div`
 
 width: 47%;
  @media (max-width: 1200px) {
    width: 100%;
  }

`;


const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 1px); 

  background-image: url('Mastering/4.jpg');
  background-size: cover;
  background-position: center;
  filter: opacity(0.2);
  z-index: -1;
`;

const StyledImage = styled.img`
  display: none; /* Ocultar por defecto */

  @media (max-width: 1200px) {
    display: block; /* Mostrar solo en dispositivos móviles */
    width: 100%;
    height: auto;
    margin: 2vw 0vw 8vw 0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  }
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
  line-height: 1.0; 

  margin: 1vw 0vw 0vw 0vw;

  @media (max-width: 768px) {

font-size: 1.3rem;
 margin: 3vw 0vw 0vw 0vw;

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

const ImageCarousel = memo(({ images, height }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);


  return (
    <CarouselContainer height={height}>
      <Carousel>
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className={index === currentIndex ? 'active' : ''}
          >
            <img src={src} alt={`Imagen ${index + 1}`} />
          </CarouselItem>
        ))}
      </Carousel>
    </CarouselContainer>
  );
});

const Mastering = () => {

  const carouselImages = [
    'Mastering/1.jpg',
    'Mastering/2.jpg',
    'Mastering/3.jpg',
    'Mastering/5.jpg',
  ];

  return (
    <>
      <Background />
      <Container>

        <ImageCarousel images={carouselImages} height="700px" />

        <Title>Mixing Mastering Service</Title>

        <LineSeparator />

        <ContainerHalf>

          <Description>
            En Gutting Audio, ofrecemos servicios de mezcla y mastering de alta calidad respaldados por más de 10 años de experiencia en la industria musical. Nuestro enfoque es transformar tu proyecto y llevarlo al siguiente nivel, ya sea a través de un proceso de mixing, mastering o ajustes de producción específicos.
          </Description>

          <StyledImage src="Mastering/5.jpg" alt="Imagen de servicios de mastering" />

          <Section>
            <SectionTitle>¿Por qué elegirnos?</SectionTitle>
            <Description>
              Nuestro compromiso es ofrecer un servicio personalizado desde el primer momento. Cada cliente tiene una conexión directa con el profesional encargado del proyecto, garantizando que la visión del artista o productor sea siempre la prioridad. Nuestro equipo, con experiencia trabajando con artistas de renombre como <strong>Mala Rodríguez</strong>, <strong>Yung Beef</strong> o <strong>Kidd Keo</strong>, asegura un trabajo de calidad adaptado a tus necesidades.
            </Description>

            <StyledImage src="Mastering/2.jpg" alt="Imagen de servicios de mastering" />

          </Section>

          <Section>
            <SectionTitle>Servicios disponibles</SectionTitle>
            <List>

            <ListItem><strong>Mastering de matriz Stereo</strong> – 40 €</ListItem>
<ListItem><strong>Mastering por Stems (hasta 6 stems)</strong> – 65 €</ListItem>
<ListItem><strong>Mezcla (hasta 20 pistas)</strong> – 150 € (pistas adicionales: 5 €/pista)</ListItem>
<ListItem><strong>Arreglo de Voces (afinación + edición)</strong> – 30 € por pista</ListItem>
<ListItem><strong>Arreglos de Producción</strong> – 20 € por edición</ListItem>
<ListItem><strong>Arreglos de Proyectos (hasta 20 pistas)</strong> – 130 €</ListItem>
<ListItem><strong>Mezcla + Mastering (hasta 20 pistas)</strong> – 180 €</ListItem>
<ListItem><strong>Arreglo de Conjunto Vocal</strong> – 80 €</ListItem>
<ListItem><strong>Mastering y Leveling de DJ Set</strong> – 40 €</ListItem>

            </List>
          </Section>

          <Description>
          <strong> Si necesitas algo más específico que no encuentras en esta lista, no dudes en contactarnos. Estamos aquí para ayudarte a conseguir el sonido que buscas.   </strong>       
          </Description>

          <StyledImage src="Mastering/3.jpg" alt="Imagen de servicios de mastering" />

        </ContainerHalf>

        <Section>
          <SectionTitle>Equipos de alta gama</SectionTitle>


          <SectionTitle2>
            Contamos con las mejores herramientas para asegurar que cada detalle de tu proyecto se escuche con la mejor calidad posible.
          </SectionTitle2>

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
              <ListItem>Lynx Aurora 8, Presonus Quantum 2626, Adam A77X, Avantone MixCubes Active, AKG K 702, Audeze MM - 100, Tratamiento Acústico</ListItem>
            </EquipmentItem>
            <EquipmentItem>
              <SectionTitle2>Plugins:</SectionTitle2>
              <ListItem>Plugin Alliance All, NewFangled Elevate, Waves All, Soundtoys All, iZotope All, Antares Autotune, Celemony Melodyne 5, FabFilter All, McDSP</ListItem>
            </EquipmentItem>
          </EquipmentList>
        </Section>

        <StyledImage src="Mastering/1.jpg" alt="Imagen de servicios de mastering" />

        <SectionTitle2>
          Si buscas un sonido profesional y una atención personalizada, Gutting Audio es tu opción. ¡Hablemos de tu proyecto y llevémoslo al siguiente nivel!
        </SectionTitle2>

      </Container>
    </>
  );
};

export default memo(Mastering);
