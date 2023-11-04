import { ChangeEvent } from 'react';

export interface IInputDate {
  label: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
