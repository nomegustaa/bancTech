import styled from 'styled-components';

export const Container = styled.div`
  margin: 1.25rem;
`;

export const ContainerContent = styled.div`
  margin: 0 3.125rem;
  @media (max-width: 28.125rem) {
    margin: 0;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  padding: 0 0.938rem;
  border-left: 3px solid ${(props) => props.theme.blueLight};
  color: ${(props) => props.theme.grayDark};
  margin: 1.563rem;
  @media (max-width: 28.125rem) {
    margin: 0;
  }
`;
