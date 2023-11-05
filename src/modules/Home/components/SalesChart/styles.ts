import styled from 'styled-components';

export const ContainerChart = styled.div`
  background-color: #fff;
  width: 37.5rem;
  padding: 0.313rem;
  margin: 0 0.313rem 0 0;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.blueLight};
  @media (max-width: 86.25rem) {
    width: 99%;
    margin: 0;
  }
`;

export const TitleChart = styled.div`
  color: ${(props) => props.theme.grayDark};
`;
