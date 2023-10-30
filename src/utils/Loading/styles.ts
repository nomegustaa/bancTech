import styled, { keyframes } from 'styled-components';

export const ContainerShimmer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const shimmerAnimation = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

export const ShimmerEffect = styled.div`
  width: 100%;
  height: 1.25rem;
  background: linear-gradient(-90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmerAnimation} 1.5s infinite;
  border-radius: 4px;
  margin: 0.625rem 0;
`;
