import * as S from './styles';

const Loading = () => {
  const shimmer = [];

  for (let i = 0; i <= 10; i++) {
    shimmer.push(<S.ShimmerEffect key={i} />);
  }

  return <S.ContainerShimmer>{shimmer}</S.ContainerShimmer>;
};

export default Loading;
