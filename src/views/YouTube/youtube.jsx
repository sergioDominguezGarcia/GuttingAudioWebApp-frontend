import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  margin-top: 8vh;
  display: flex;
  flex-direction: column;
  padding: 2vw 2.6vw;
  height: 100%;

  @media (max-width: 768px) {
    padding: 4vw;
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
  margin: 0;
  font-size: 5vw;

  @media (max-width: 768px) {
    font-size: 9vw;
  }
`;

const VideoList = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const VideoItem = styled.div`
  display: flex;
  flex-direction: column;
  background: #1a1a1a;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  iframe {
    border-radius: 8px;
    width: 100%;
    aspect-ratio: 16 / 9; /* Mantiene la proporción del video */
    border: 2px solid #333;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
    }
  }

  h3 {
    color: #fff;
    font-size: 18px;
    margin: 10px 0 0;
  }

  @media (max-width: 768px) {
    iframe {
      aspect-ratio: 16 / 9;
    }

    h3 {
      font-size: 16px;
    }
  }
`;

const Youtube = () => {

  const videos = [
    { name: '', url: 'https://www.youtube.com/embed/8Pb-MQCPQsc' },
    { name: '', url: 'https://www.youtube.com/embed/jjbiMXfe2NU' },
    { name: '', url: 'https://www.youtube.com/embed/kxstMJY2Q28' },
  ];


  return (
    <Container>
      <Title>YouTube</Title>
      <LineSeparator />

      <VideoList>
        {videos.map((video, index) => (
          <VideoItem key={index}>
            <iframe
              src={video.url}
              title={video.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>{video.name}</h3>
          </VideoItem>
        ))}
      </VideoList>
    </Container>
  );
};

export default Youtube;
