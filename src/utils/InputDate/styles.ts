import styled from 'styled-components';

export const ContainerDate = styled.div`
  display: flex;
  align-items: center;
`;

export const InputDate = styled.input`
  color: ${(props) => props.theme.grayDark};

  &::-webkit-calendar-picker-indicator {
    filter: invert(45%) sepia(5%) saturate(65%) hue-rotate(251deg) brightness(91%);
  }
`;
