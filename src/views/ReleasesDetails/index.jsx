import { memo } from 'react';
import * as S from './styles';
import EpDetail from '../../components/EpDetails';

const ReleasesDetail = () => {
  return (
    <S.Content>
      <EpDetail />

    </S.Content>
  )
};

export default memo(ReleasesDetail);
