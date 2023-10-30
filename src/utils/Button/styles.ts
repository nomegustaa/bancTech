import styled from 'styled-components';
import { IButtonStyle } from './interface';

export const Button = styled.button<IButtonStyle>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.blueLight};
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  cursor: pointer;
`;
