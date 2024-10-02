import { memo } from 'react';
import * as S from './styles';
import MusicPlayer from '../../components/MusicPlayer';
import EpDetail from '../../components/EpDetails';

const ReleasesDetail = () => {
  return (
    <S.Content>
      <EpDetail />
      {/* <MusicPlayer /> */}
    </S.Content>
  )
};

export default memo(ReleasesDetail);
