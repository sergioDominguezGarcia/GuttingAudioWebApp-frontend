import { memo } from 'react';
import * as S from './styles';
import ImageCarousel from '../../components/ImageCarousel';
import EpList from '../../components/EpList'; // No necesitas recibir 'eps'

const Releases = () => {
  return (
    <S.Content>



<S.Title>Mixing Mastering Service</S.Title>

<S.LineSeparator>

</S.LineSeparator>


      {/* <S.Img>
      </S.Img> */}
      <ImageCarousel />
  
      <S.Releases>
        <EpList />
      </S.Releases>
    </S.Content>
  )
};

export default memo(Releases);
