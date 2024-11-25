import { memo } from 'react';
import * as S from './styles';
import ImageCarousel from '../../components/ImageCarousel';
import EpList from '../../components/EpList'; // No necesitas recibir 'eps'

const Releases = () => {
  return (
    <S.Content>
      <S.Title>Releases</S.Title>
      <S.LineSeparator></S.LineSeparator>
      <ImageCarousel />
      <S.Releases>
        <EpList />
      </S.Releases>
    </S.Content>
  )
};

export default memo(Releases);
