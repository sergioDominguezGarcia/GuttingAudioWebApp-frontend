import React from 'react'
import * as S from './styles'
import Black from '../../assets/Black.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay,
  faBackward,
  faForward,
} from '@fortawesome/free-solid-svg-icons'

const MusicPlayer = () =>{
  return (
    <S.Container>
      <S.Cover> <img src={Black} alt="logo" /> </S.Cover>
      <S.Tittle>TEST TITTLE</S.Tittle>
      <S.Artist>TEST ARTIST</S.Artist>

      <S.PlayerProgress>
        <S.ProgressBar></S.ProgressBar>
        <S.MusicDuracion>
          <S.CurrentTime>0:00</S.CurrentTime>
          <S.Duration>0:00</S.Duration>
        </S.MusicDuracion>
      </S.PlayerProgress>

      <S.Controls>
        <S.Prev>
          <FontAwesomeIcon icon={faBackward} />
        </S.Prev>
        <S.Play>
          <FontAwesomeIcon icon={faPlay} />
        </S.Play>
        <S.Next>
          <FontAwesomeIcon icon={faForward} />
        </S.Next>
      </S.Controls>
    </S.Container>
  )

} 
export default MusicPlayer;
