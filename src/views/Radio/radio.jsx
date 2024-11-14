import { memo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vw 3vw;

  @media (max-width: 768px) {
    padding: 5vw 1vw;
    margin-bottom: 3vh;
  }
`;

const Name = styled.div`
  color: #ffffff; // Color blanco predeterminado en móviles
  text-decoration: none;
  font-family: kaneda-gothic-extrabold;
  text-transform: uppercase;
  display: block;
  position: relative;
  margin: 20px 0;
  font-size: 9vw;
  line-height: 0.8;
  width: 95vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  // Estilos para pantallas grandes (escritorio)
  @media (min-width: 768px) {
    color: #9b9b9b; // Color inicial gris en escritorio
    font-size: 5vw;
    width: 70vw;

    &:hover {
      color: #ffffff; // Cambia a blanco en hover en escritorio
      transition: color 0.2s ease;
    }

    &:not(:hover) {
      color: #9b9b9b;
      transition: color 0.3s ease;
    }
  }
`;


const Year = styled.div`
  font-family: kaneda-gothic-extrabold;
  font-size: 5vw;
  color: #9b9b9b;
  margin: -20px 0px 20px 0px;
  @media (min-width: 768px) {
    font-size: 1vw;
    
  }
`;

const LineSeparator = styled.div`
  width: 100%;
  height: 1px;
  background: #d8d8d8;
  margin: 30px 0px 10px 0px;
`;


const Iframe = styled.iframe`
  width: 100%;
  height: 166px;

 
  @media (max-width: 768px) {
    height: 120px; // Puedes ajustar esta altura según necesites
  }
`;




const sessions = [
  { name: "GTTNPOD001 - DAVID SYNTH", year: 2020, audioSrc: "https://api.soundcloud.com/tracks/799891507" },
  { name: "GTTNPOD002 - VANDERMOU", year: 2020, audioSrc: "https://api.soundcloud.com/tracks/823603141" },
  { name: "GTTNPOD003 - HEBRA", year: 2020, audioSrc: "https://api.soundcloud.com/tracks/857197432" },
  { name: "GTTNPOD004 - MANCHA", year: 2020, audioSrc: "https://api.soundcloud.com/tracks/869426059" },
  { name: "GTTNPOD005 - SUSPECT", year: 2020, audioSrc: "https://api.soundcloud.com/tracks/902183935" },
  { name: "GTTNPOD006 - FEARLESS", year: 2020, audioSrc: "https://api.soundcloud.com/tracks/930176434" },
  { name: "GTTNPOD007 - QKHACK", year: 2021, audioSrc: "https://api.soundcloud.com/tracks/947163346" },
  { name: "GTTNPOD008 - MANIATICS", year: 2021, audioSrc: "https://api.soundcloud.com/tracks/995543896" },
  { name: "GTTNPOD009 - SETE", year: 2021, audioSrc: "https://api.soundcloud.com/tracks/1166493208" },
  { name: "GTTNPOD010 - MV", year: 2024, audioSrc: "https://api.soundcloud.com/tracks/1746835323" },
  { name: "GTTNPOD011 - HACKWAVES", year: 2024, audioSrc: "https://api.soundcloud.com/tracks/1812619077" },
];


const sortedSessions = sessions.sort((a, b) => {
  const numA = parseInt(a.name.match(/\d+/)[0]);
  const numB = parseInt(b.name.match(/\d+/)[0]);
  return numB - numA;
});

const Radio = () => {
  return (
    <Container>
      {sortedSessions.map((session, index) => (
        <div key={index}>
          <Name>
            {session.name}
          </Name>
          <Year>
            {session.year}
          </Year>


          <Iframe
  className="soundcloud-player"
  scrolling="no"
  frameBorder="no"
  allow="autoplay"
  src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(session.audioSrc)}&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false`}
></Iframe>


          {index < sortedSessions.length - 1 && <LineSeparator />}
        </div>
      ))}
    </Container>
  );
};

export default memo(Radio);
