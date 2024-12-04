import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import emailjs from 'emailjs-com'

const ContainerFormulario = styled.div`
  z-index: 30;
  width: 100%;
  margin: auto; /* Centrar horizontalmente */
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  padding: 0vw 0vw 6vw 0vw;

  @media (max-width: 768px) {
    padding: 0vw 0vw 5vw 0vw;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between; /* Espaciado adecuado entre columnas */
  gap: 10px; /* Espaciado interno entre los elementos */

  @media (max-width: 808px) {
    flex-direction: column;
    margin: 0 auto;
    gap: 20px; /* Más espacio en pantallas pequeñas */
  }
`

const Column = styled.div`
  flex: 1;
  min-width: 00px;
  margin: 0px;
`

const Input = styled.input`
  backdrop-filter: blur(8px);
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.13);
  font-family: 'M Ying', sans-serif;
  width: 100%; /* Asegura que ocupe todo el ancho del contenedor */
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #000000;
  border-radius: 0px;
  font-size: 1vw;
  box-sizing: border-box; /* Incluye el padding y el borde en el ancho */
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #ffffff; /* Cambia el borde a verde al hacer focus */
    outline: none; /* Elimina el borde por defecto del navegador */
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 4.2vw;
    margin: 6px 0;
  }
`

const TextArea = styled.textarea`
  backdrop-filter: blur(8px);
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.13);
  font-family: 'M Ying', sans-serif;
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #000000;
  border-radius: 0px;
  font-size: 1vw;
  box-sizing: border-box; /* Incluye el padding y el borde en el ancho */
  resize: vertical;
  transition: border-color 0.3s ease;
  height: 215px;

  &:focus {
    border-color: #ffffff; /* Cambia el borde a verde al hacer focus */
    outline: none; /* Elimina el borde por defecto del navegador */
  }

  @media (max-width: 768px) {
    font-size: 4.2vw;
    height: 155px;
    margin: 0px 0;
  }
`

const RowBotones = styled.div`
  display: flex;
  justify-content: space-between; /* Alinea los botones correctamente */
  flex-wrap: wrap; /* Permite que los botones se ajusten a nuevas filas en pantallas pequeñas */
  width: 100%; /* Asegura que ocupe todo el ancho del contenedor */
  gap: 10px; /* Espaciado interno entre botones */
  margin-top: 1vw;
  margin-bottom: 2vw;
  padding: 0; /* Elimina cualquier relleno no deseado */
  box-sizing: border-box; /* Incluye bordes y padding en el ancho total */

  @media (max-width: 768px) {
    margin-top: 5vw;
    margin-bottom: 5vw;
    padding: 0; /* Asegura que no se agregue espacio adicional */
    justify-content: space-between; /* Cambia para que no agregue espacio en los extremos */
  }
`

const Button = styled.button`
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.13);
  font-family: 'kaneda-gothic-extrabold';
  padding: 5px;
  margin-top: 60px;
  width: 35vh;
  margin: 0px;
  border: 1px solid #000000;
  border-radius: 0px;
  font-size: 3rem;
  cursor: pointer;
  text-transform: uppercase; /* Todo en mayúsculas */

  &:focus {
    color: #ffffff;
    outline: none; /* Elimina el borde por defecto del navegador */
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: #888888da;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3); /* Sombra negra intensa */
    `}

  @media (max-width: 768px) {
    width: 160px;
    font-size: 1.4rem;

    padding: 7px;
  }
`

const TituloBotones = styled.div`
  color: #ffffff; /* Color grisaceo */
  font-family: 'kaneda-gothic-light';

  margin-top: 2vw;
  font-size: 2.5rem;
  text-transform: uppercase; /* Todo en mayúsculas */

  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 5.8vw;
  }
`

const EnviarButton = styled.button`
  margin-top: 50px;
  padding: 0.8vw 1.4vw; /* Ajuste del padding para hacerlo más pequeño */
  font-size: 1vw;
  font-family: 'M Ying', sans-serif;
  color: #a7a7a7;
  background-color: #63636375;
  border: 1px solid white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:focus {
    border-color: #ffffff; /* Cambia el borde a verde al hacer focus */
    outline: none; /* Elimina el borde por defecto del navegador */
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3); /* Sombra negra intensa */
  }

  &:hover {
    background-color: #ffffffda;
    color: #000000;
    border: 1px solid black;
  }

  @media (max-width: 768px) {
    font-size: 4.2vw;
    margin-top: 5vh;
  }
`

const SuccessMensaje = styled.div`
  color: #56af44;
  font-size: 14px;
  margin-top: 5px;
  margin-left: 10px;
`

const ErrorMensaje = styled.div`
  position: absolute;

  color: #ff000094;
  font-size: 19px;
  margin-top: 5px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const FormularioContacto = () => {
  const [selectedButtons, setSelectedButtons] = useState([
    false,
    false,
    false,
    false,
  ])
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [consulta, setConsulta] = useState('')
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const toggleButton = (index) => {
    const newSelectedButtons = [...selectedButtons]
    newSelectedButtons[index] = !newSelectedButtons[index]
    setSelectedButtons(newSelectedButtons)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Validar campos
    if (!nombre || !email || selectedButtons.every((btn) => !btn)) {
      setError('Por favor completa todos los campos requeridos.')
      return
    }

    let nuevaConsulta = ''
    selectedButtons.forEach((selected, idx) => {
      if (selected) {
        nuevaConsulta +=
          (nuevaConsulta.length > 0 ? ' ' : '') +
          ['Mastering', ' Mixing', 'Events', 'Consulta general'][idx]
      }
    })

    // Limpiar errores si todo está bien
    setError('')

    // Preparar datos para enviar con EmailJS
    const templateParams = {
      user_name: nombre, // Nombre del usuario
      reply_to: email, // Correo electrónico del usuario, usamos "reply_to"
      telefono: telefono, // Teléfono del usuario
      mensaje: consulta, // Mensaje o consulta del usuario
      project_interest: nuevaConsulta, // Interés del proyecto (por ejemplo: Sitio Web, etc.)
    }

    emailjs
      .send(
        'service_8v3gwl7',
        'template_7cvpfxj',
        templateParams,
        'zKKpga6of9pJY-95G'
      )

      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
          setSuccessMessage('Mensaje enviado con éxito')
        },
        (error) => {
          console.log('FAILED...', error)
        }
      )

    setNombre('')
    setEmail('')
    setTelefono('')
    setConsulta('')
    setSelectedButtons([false, false, false, false])
  }

  return (
    <ContainerFormulario>
      <form onSubmit={handleSubmit}>
        <TituloBotones>
          Selecciona el tipo de servicio o colaboración que te interesa:
        </TituloBotones>

        <RowBotones>
          <Button
            type="button"
            selected={selectedButtons[0]}
            onClick={() => toggleButton(0)}
          >
            Mastering
          </Button>
          <Button
            type="button"
            selected={selectedButtons[1]}
            onClick={() => toggleButton(1)}
          >
            Mixing
          </Button>
          <Button
            type="button"
            selected={selectedButtons[2]}
            onClick={() => toggleButton(2)}
          >
            Events
          </Button>
          <Button
            type="button"
            selected={selectedButtons[3]}
            onClick={() => toggleButton(3)}
          >
            Consulta General
          </Button>
        </RowBotones>

        <Row>
          <Column>
            <Input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="tel"
              placeholder="Teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </Column>
          <Column>
            <TextArea
              placeholder="Consulta"
              value={consulta}
              onChange={(e) => setConsulta(e.target.value)}
            />
          </Column>
        </Row>

        {error && <ErrorMensaje>{error}</ErrorMensaje>}
        {successMessage && <SuccessMensaje>{successMessage}</SuccessMensaje>}
        <Row>
          <Column>
            <EnviarButton type="submit">ENVIAR</EnviarButton>
          </Column>
        </Row>
      </form>
    </ContainerFormulario>
  )
}

export default FormularioContacto
