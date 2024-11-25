import { memo, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import Gutting from '../../assets/Gutting.jpg'
import Menu from '../Menu/menu'

const Header = () => {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isIphone, setIsIphone] = useState(false)

  const handleGoToArtists = useCallback(() => {
    navigate('/artists')
  }, [navigate])

  const handleGoToRadio = useCallback(() => {
    navigate('/radio')
  }, [navigate])

  const handleGoToReleases = useCallback(() => {
    navigate('/releases')
  }, [navigate])

  const handleGoToHome = useCallback(() => {
    navigate('/home')
  }, [navigate])




  const controlHeaderVisibility = useCallback(() => {
    if (!isIphone && typeof window !== 'undefined') { // Solo aplica para dispositivos que no son iPhone
      if (window.scrollY > lastScrollY) {
        setIsVisible(false) 
      } else {
        setIsVisible(true)
      }
      setLastScrollY(window.scrollY)
    }
  }, [lastScrollY, isIphone])



  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Detecta si es un iPhone
      const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera
      if (/iPhone|iPad|iPod/i.test(userAgent)) {
        setIsIphone(true)
      }

      // Solo agrega el event listener si no es un iPhone
      if (!isIphone) {
        window.addEventListener('scroll', controlHeaderVisibility)
      }

      return () => {
        if (!isIphone) {
          window.removeEventListener('scroll', controlHeaderVisibility)
        }
      }
    }
  }, [controlHeaderVisibility, isIphone])

  return (
    <S.Header isVisible={isVisible}>

      <S.Content>
      <S.Logo onClick={handleGoToHome}> 
  <img src={Gutting} width="220px" alt="Logo" />
        </S.Logo>
        <S.NavBar>


        <Menu/>


          <S.NavLink>
            <S.Link onClick={handleGoToHome}>HOME</S.Link>
          </S.NavLink>
          <S.NavLink>
            <S.Link onClick={handleGoToReleases}>RELEASES</S.Link>
          </S.NavLink>
          <S.NavLink>
            <S.Link onClick={handleGoToArtists}>ARTISTS</S.Link>
          </S.NavLink>
          <S.NavLink>
            <S.Link onClick={handleGoToRadio}>GUTTING RADIO</S.Link>
          </S.NavLink>
        </S.NavBar>
      </S.Content>

    </S.Header>
  )
}

export default memo(Header)
