import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

export const ContainerContent = styled.div`
  margin: 0 50px;
`;

export const ContainerSection = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1380px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  padding: 0 15px;
  border-left: 3px solid ${(props) => props.theme.blueLight};
  color: ${(props) => props.theme.grayDark};
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
