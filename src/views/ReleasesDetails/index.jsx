import { memo } from 'react';
import * as S from './styles';
import back from '../../assets/back.webp';
import EpDetails from '../../components/EpDetails';

const Releases = () => {
  return (
    <S.Content background={back}>
      <S.Releases>
        <EpDetails />
      </S.Releases>
    </S.Content>
  )
};

export default memo(Releases);
