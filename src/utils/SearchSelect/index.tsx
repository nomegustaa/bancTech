import { IOpition, ISearchSelect } from './interface';
import * as S from './styles';

const SearchSelect = ({ options, onChange, defaultValue }: ISearchSelect) => {
  return (
    <div>
      <select onChange={onChange} defaultValue={defaultValue}>
        <option disabled hidden>
          {defaultValue}
        </option>
        {options.map((option: IOpition, index: number) => {
          return (
            <S.Options key={index} value={option.value}>
              {option.label}
            </S.Options>
          );
        })}
      </select>
    </div>
  );
};

export default SearchSelect;
