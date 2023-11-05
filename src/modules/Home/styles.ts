import styled from 'styled-components';

export const ContainerSection = styled.div`
  margin: 0.625rem 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 86.25rem) {
    flex-direction: column;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 300;
  color: ${(props) => props.theme.grayDark};
  cursor: pointer;
`;
