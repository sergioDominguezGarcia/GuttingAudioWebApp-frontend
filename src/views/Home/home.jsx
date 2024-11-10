import { memo } from 'react'
import styled from 'styled-components'
import HomeCarousel from '../../components/HomeCarousel/homecarousel'
import Loading from '../../components/Loading/loading'


export const Home = styled.div`

`





const Artists = () => {

  return (
    <Home>

      
<Loading />

<HomeCarousel />


    </Home>


  )
}

export default memo(Artists)
