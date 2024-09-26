import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import Gutting from '../../assets/Gutting.jpg'

const Header = () => {
  const navigate = useNavigate()

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


  return (
    <S.Header>
      <S.Content>
        <S.Logo>
          <img src={Gutting} width="200px" alt="" />
        </S.Logo>
        <S.NavBar>
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
