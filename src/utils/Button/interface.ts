export interface IButton {
  value: string;
  width: string;
  height: string;
}

export interface IButtonStyle extends Omit<IButton, 'value'> {}
