import { IlineLoading } from './interface';
import * as S from './styles';

const Loading = ({ lineLoading }: IlineLoading) => {
  const shimmer = [];

  for (let i = 0; i <= lineLoading; i++) {
    shimmer.push(<S.ShimmerEffect key={i} />);
  }

  return <S.ContainerShimmer>{shimmer}</S.ContainerShimmer>;
};

export default Loading;
