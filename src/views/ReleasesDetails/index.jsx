import { memo } from 'react';
import * as S from './styles';

import EpDetails from '../../components/EpDetails';


const ReleasesDetail = () => {
  return (
    <S.Content>
      <S.ReleaseDetails>
        <EpDetails />
      </S.ReleaseDetails>
    </S.Content>
  )
};

export default memo(ReleasesDetail);
