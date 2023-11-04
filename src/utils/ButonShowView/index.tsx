import { IButtonShowView } from './interface';
import * as S from './style';

const ButtonShowView = ({ onClick, isExpand, itemId }: IButtonShowView) => {
  return (
    <S.ButttonShowView onClick={onClick}>
      {isExpand[itemId] ? 'Ver menos' : 'Ver mais'}
    </S.ButttonShowView>
  );
};

export default ButtonShowView;
