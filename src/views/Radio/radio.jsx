import { useRef, useEffect, useState, memo } from 'react';
import styled from 'styled-components';
import Texto from '../../components/TextoInfinitoVertical/textoinfinitovertical';

const Container = styled.div`
  margin-top: 8vh;
  display: flex;
  flex-direction: column;
  padding: 2vw 3vw;
  width: 85%;
  align-content: center;

  @media (max-width: 768px) {
    padding: 5vw 1vw;
    width: 97%;
    margin-bottom: 3vh;
    align-content: center;
  }
`;

const Name = styled.div`
  color: #ffffff;
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

  @media (min-width: 768px) {
    color: #9b9b9b;
    font-size: 5vw;
    width: 70vw;

    &:hover {
      color: #ffffff;
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
    height: 120px;
  }
`;

const VolumeControl = styled.input`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  appearance: none;
  height: 6px;
  background: linear-gradient(90deg, #ffffff 0%, #ff0000 100%);
  border-radius: 5px;
  outline: none;
  opacity: 0.9;
  z-index: 100;
  transition: opacity 0.3s, background 0.3s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background: #000000;
    border: 2px solid #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
  }

  &::-webkit-slider-thumb:hover {
    background: #000000;
    transform: scale(1.1);
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #ffffff;
    border: 2px solid #000000;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
  }

  &::-moz-range-thumb:hover {
    background: #007bff;
    transform: scale(1.1);
  }

  &::-ms-thumb {
    width: 20px;
    height: 20px;
    background: #ffffff;
    border: 2px solid #000000;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
  }

  &::-ms-thumb:hover {
    background: #ff0000;
    transform: scale(1.1);
  }
`;


const sessions = [
  { name: 'GTTNPOD001 - DAVID SYNTH', year: 2020, audioSrc: 'https://api.soundcloud.com/tracks/799891507' },
  { name: 'GTTNPOD002 - VANDERMOU', year: 2020, audioSrc: 'https://api.soundcloud.com/tracks/823603141' },
  { name: 'GTTNPOD003 - HEBRA', year: 2020, audioSrc: 'https://api.soundcloud.com/tracks/857197432' },
  { name: 'GTTNPOD004 - MANCHA', year: 2020, audioSrc: 'https://api.soundcloud.com/tracks/869426059' },
  { name: 'GTTNPOD005 - SUSPECT', year: 2020, audioSrc: 'https://api.soundcloud.com/tracks/902183935' },
  { name: 'GTTNPOD006 - FEARLESS', year: 2020, audioSrc: 'https://api.soundcloud.com/tracks/930176434' },
  { name: 'GTTNPOD007 - QKHACK', year: 2021, audioSrc: 'https://api.soundcloud.com/tracks/947163346' },
  { name: 'GTTNPOD008 - MANIATICS', year: 2021, audioSrc: 'https://api.soundcloud.com/tracks/995543896' },
  { name: 'GTTNPOD009 - SETE', year: 2021, audioSrc: 'https://api.soundcloud.com/tracks/1166493208' },
  { name: 'GTTNPOD010 - MV', year: 2024, audioSrc: 'https://api.soundcloud.com/tracks/1746835323' },
  { name: 'GTTNPOD011 - HACKWAVES', year: 2024, audioSrc: 'https://api.soundcloud.com/tracks/1812619077' },
];

const sortedSessions = sessions.sort((a, b) => {
  const numA = parseInt(a.name.match(/\d+/)[0]);
  const numB = parseInt(b.name.match(/\d+/)[0]);
  return numB - numA;
});


const Radio = () => {
  const players = useRef([]);
  const [volume, setVolume] = useState(100);



  useEffect(() => {
    const initializePlayers = () => {
      const promises = Array.from(document.querySelectorAll('.soundcloud-player')).map((iframe) => {
        const widget = window.SC.Widget(iframe);
  
        return new Promise((resolve) => {
          widget.bind(window.SC.Widget.Events.READY, () => {
            console.log(`Widget ready for ${iframe.src}`);
            widget.setVolume(volume); // Ajusta el volumen inicial directamente
            resolve(widget);
          });
        });
      });
  
      Promise.all(promises).then((widgets) => {
        players.current = widgets; // Guarda todos los widgets
      });
    };
  
    if (window.SC) {
      initializePlayers();
    } else {
      const script = document.createElement('script');
      script.src = 'https://w.soundcloud.com/player/api.js';
      script.onload = initializePlayers;
      document.body.appendChild(script);
    }
  
    return () => {
      players.current.forEach((player) => {
        if (player) {
          player.unbind(window.SC.Widget.Events.READY); // Limpia eventos
        }
      });
    };
  }, [volume]);
  
  useEffect(() => {
    players.current.forEach((player) => {
      if (player) {
        player.setVolume(volume); // Ajusta el volumen a cada widget
        console.log(`Widget volume updated to: ${volume}`);
      }
    });
  }, [volume]); // Asegúrate de incluir `volume` como dependencia
  
  

  const handleVolumeChange = (e) => {
    const newVolume = Number(e.target.value);
    console.log(`Volume slider changed: ${newVolume}`);

    if (newVolume === volume) return; // Evita cambios redundantes

    setVolume(newVolume); // Actualiza el estado del slider

    players.current.forEach((player) => {
      if (player) {
        player.setVolume(newVolume / 100); // Ajusta el volumen en los widgets
        console.log(`Widget volume updated to: ${newVolume / 100}`);
      }
    });
  };

  return (
    <Container>
      <Texto />
      <VolumeControl type="range" min="0" max="100" value={volume} onChange={handleVolumeChange} />

      {sortedSessions.map((session, index) => (
        <div key={index}>
          <Name>{session.name}</Name>
          <Year>{session.year}</Year>
          <Iframe
  className="soundcloud-player"
  scrolling="no"
  frameBorder="no"
  allow="autoplay"
  src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(session.audioSrc)}&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false`}
/>
          {index < sortedSessions.length - 1 && <LineSeparator />}
        </div>
      ))}
    </Container>
  );
};

export default memo(Radio);
