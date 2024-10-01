import styled from 'styled-components'

// Contenedor de la cuadrícula para los EPs
export const EpGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(200px, 1fr)
  ); /* Diseño adaptable */
  gap: 20px;
  padding: 20px;
  /* background-color: #f4f4f4; */
`

// Cada tarjeta de EP (card)
export const EpCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f1f1f;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-height: 270px;
  &:hover {
    transform: translateY(-10px); /* Efecto de "flotar" */
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`

// Imagen de portada del EP
export const EpCover = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-bottom: 3px solid #000;
`

// Título del EP
export const EpTitle = styled.h3`
  margin: 10px 0;
  font-size: 1.1rem;
  color: #fff;
  text-align: center;
  
`
