import { ChangeEvent } from 'react';

export interface ISearchSelect {
  options: IOpition[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  defaultValue: string;
}

export interface IOpition {
  value: string;
  label: string;
}
