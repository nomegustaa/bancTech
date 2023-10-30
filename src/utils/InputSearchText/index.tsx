import { IInput } from './interface';
import * as S from './styles';

const InputSearchText = ({ onChange, ...props }: IInput) => {
  return (
    <S.ContainerInput>
      <S.Input type='text' onChange={onChange} {...props} placeholder='Digite sua busca.' />
      <S.IconSearch size={20} color='#ccc' weight='bold' />
    </S.ContainerInput>
  );
};

export default InputSearchText;
