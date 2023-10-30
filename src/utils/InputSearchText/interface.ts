import { ChangeEvent } from 'react';

export interface IInput extends React.ComponentProps<'input'> {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
