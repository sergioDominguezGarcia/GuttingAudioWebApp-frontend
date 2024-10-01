import styled from 'styled-components'

export const Content = styled.div`
  position: relative; /* Necesario para que el carrusel se posicione adecuadamente */
  display: flex;
  flex-direction: column; /* Cambia a columna para que el carrusel esté encima */
  justify-content: flex-start; /* Ajusta para que comience en la parte superior */
  height: 100vh; /* Asegúrate de que ocupe toda la altura de la ventana */
  width: 100%;
  overflow: hidden; /* Evita el desbordamiento */
`

export const Releases = styled.div`
  position: relative; /* Posicionar en relación al contenedor */
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  margin-top: -7rem; /* Ajusta para que no haya espacio entre el carrusel y la lista */
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem; /* Mantiene el padding */
`
