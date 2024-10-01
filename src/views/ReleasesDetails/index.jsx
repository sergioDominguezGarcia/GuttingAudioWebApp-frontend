import { memo } from 'react';
import * as S from './styles';
import back from '../../assets/back.webp';
import EpDetails from '../../components/EpDetails';

const Releases = () => {
  return (
    <S.Content>
      <S.ReleaseDetails>
        <EpDetails />
      </S.ReleaseDetails>
    </S.Content>
  )
};

export default memo(Releases);
