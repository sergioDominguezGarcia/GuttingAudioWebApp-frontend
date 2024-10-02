import styled from 'styled-components'

// Contenedor de la cuadrícula para los EPs
export const EpGrid = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  gap: 20px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box; 
`

// Cada tarjeta de EP (card)
export const EpCard = styled.div`
  display: block;
  /* background-color: #1f1f1f; */
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px); /* Efecto de "flotar" */
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }

  /* Ajusta el tamaño de las tarjetas según el tamaño de la pantalla */
  width: 100%;
  max-width:450px;
  height: 100%;
  max-height: 450px;
`

// Imagen de portada del EP
export const EpCover = styled.img`
  width: 100%;

  object-fit: cover;
  
  /* Asegura que no haya margen ni espacio extra debajo de la imagen */
`
