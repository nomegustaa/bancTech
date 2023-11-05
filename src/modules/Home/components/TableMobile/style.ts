import styled from 'styled-components';
import { IStatus } from '../Table/interface';

export const ParagraphStatus = styled.span<IStatus>`
  color: ${(props) =>
    props.status === 'pago'
      ? (props) => props.theme.grenCorrect
      : props.status === 'falha'
      ? (props) => props.theme.redError
      : (props) => props.theme.yellowWarning};
`;
