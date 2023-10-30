import styled from 'styled-components';
import { MagnifyingGlass } from '@phosphor-icons/react';

export const ContainerInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  height: 1.063rem;
  width: 15rem;
  padding: 0.313rem 0 0.313rem 1.25rem;
`;

export const IconSearch = styled(MagnifyingGlass)`
  position: absolute;
  top: 46%;
  right: 0.625rem;
  left: 0;
  transform: translateY(-50%);
  font-size: 1rem;
  cursor: pointer;
`;
