import styled, { keyframes } from 'styled-components';
import { Shimmer } from 'react-shimmer';



export const ContainerShimmer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledShimmer = styled(Shimmer)`
  margin: 8px 0px;
  border-radius: 10px;
`;


const shimmer = keyframes`
    0% {
      background-position: -100px 0;
    }
    100% {
      background-position: 100px 0;
    }
`

// define o componente que terá o efeito shimmer
export const ShimmerEffect = styled.div`
    animation: ${shimmer} 2s infinite;
    background: linear-gradient(
      to right,
      #eeeeee 8%,
      #dddddd 18%,
      #eeeeee 33%
    );
    background-size: 800px 104px;
    position: relative;
`