import { IInputDate } from './interface';
import * as S from './styles';

const InputDate = ({ label, onChange, value }: IInputDate) => {
  return (
    <S.ContainerDate>
      <label htmlFor={label}>{label}</label>
      <input type='date' value={value} onChange={onChange} />
    </S.ContainerDate>
  );
};

export default InputDate;
