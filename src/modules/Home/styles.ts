import styled from 'styled-components';

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
