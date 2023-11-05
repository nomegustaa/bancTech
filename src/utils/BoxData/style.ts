import styled from 'styled-components';
import { IBoxData } from './interface';

export const BoxData = styled.div<IBoxData>`
  background-color: ${(props) => props.theme.white};
  border-radius: 15px;
  padding: 0.313rem 0.938rem;
  margin: 0.625rem 0;
`;
