import { IButton } from './interface';
import * as S from './styles';

const Button = ({ value, width, height }: IButton) => {
  return (
    <S.Button width={width} height={height}>
      {value}
    </S.Button>
  );
};

export default Button;
