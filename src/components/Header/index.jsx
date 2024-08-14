import { memo } from 'react'
import * as S from './styles'
import Gutting from '../../assets/Gutting.jpg'


const Header = () => {



  return (
    <S.Header>
      <S.Content>
        <S.Logo>
          <img src={Gutting} width="200px" alt="" />
        </S.Logo>
        <S.NavBar>
          <S.NavLink>
            <S.Link>HOME</S.Link>
          </S.NavLink>
          <S.NavLink>
            <S.Link>RELEASES</S.Link>
          </S.NavLink>
          <S.NavLink>
            <S.Link>ARTISTS</S.Link>
          </S.NavLink>
          <S.NavLink>
            <S.Link>GUTTING RADIO</S.Link>
          </S.NavLink>
        </S.NavBar>
      </S.Content>
    </S.Header>
  )
  
}

export default memo(Header)
