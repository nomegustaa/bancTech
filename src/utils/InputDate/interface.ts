import { IInput } from '../InputSearchText/interface';

export interface IInputDate extends Pick<IInput, 'onChange'> {
  label: string;
}
