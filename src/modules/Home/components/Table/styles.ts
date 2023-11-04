import styled from 'styled-components';
import { IStatus } from './interface';

export const ContainerTable = styled.div`
  width: 65%;
  border-radius: 5px;
  border: 0.063rem solid ${(props) => props.theme.blueLight};
  overflow: auto;
  max-height: 29rem;
  margin: 0 0px 0 10px;
  @media (max-width: 1380px) {
    width: 100%;
    margin: 10px 0;
  }

  &::-webkit-scrollbar {
    width: 0.625rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.grayLight};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme[`white-250`]};
  }
`;

export const Table = styled.table`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  overflow: hidden;
`;

export const TableBody = styled.tbody`
  max-height: 12.5rem;
  overflow-y: auto;
`;

export const TableHeaderTd = styled.td`
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 0.75rem;
  text-align: center;
`;

export const TableBodyTd = styled.td`
  padding: 0.5rem 0.75rem;
  text-align: center;
  font-weight: 300;
`;

export const TableBodyTdError = styled.td`
  text-align: center;
  font-size: 1.3rem;
  color: ${(props) => props.theme.redError};
`;

export const TableBodyTdStatus = styled.td<IStatus>`
  padding: 0.5rem 0.75rem;
  text-align: center;
  color: ${(props) =>
    props.status === 'pago'
      ? (props) => props.theme.grenCorrect
      : props.status === 'falha'
      ? (props) => props.theme.redError
      : (props) => props.theme.yellowWarning};
`;
