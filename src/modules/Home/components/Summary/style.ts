import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
  color: ${(props) => props.theme.grayDark};
`;

export const ContainerBox = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 50rem) {
    flex-direction: column;
    p {
      text-align: center;
    }
  }
`;

export const ParagraphPaidOut = styled.p`
  color: ${(props) => props.theme.grenCorrect};
`;

export const ParagraphFailure = styled.p`
  color: ${(props) => props.theme.redError};
`;

export const ParagraphProcessing = styled.p`
  color: ${(props) => props.theme.yellowWarning};
`;
