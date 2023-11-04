import styled from 'styled-components';
import { IStatus } from '../Table/interface';

export const BoxData = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 5px;
  padding: 15px;
  margin: 10px 0;
`;

export const ParagraphStatus = styled.span<IStatus>`
  color: ${(props) =>
    props.status === 'pago'
      ? (props) => props.theme.grenCorrect
      : props.status === 'falha'
      ? (props) => props.theme.redError
      : (props) => props.theme.yellowWarning};
`;
