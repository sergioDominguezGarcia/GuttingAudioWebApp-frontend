import { memo } from 'react'
import styled from 'styled-components'
import HomeCarousel from '../../components/HomeCarousel/homecarousel'


export const Home = styled.div`
  max-width: 100%;
  height: 100vh;
`





const Artists = () => {

  return (
    <Home>

<HomeCarousel />


    </Home>


  )
}

export default memo(Artists)
