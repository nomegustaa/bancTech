export interface IButtonShowView {
  onClick: () => void;
  isExpand: { [key: string]: boolean };
  itemId: string;
}
