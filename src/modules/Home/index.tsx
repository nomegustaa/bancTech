import { useState } from 'react';
import * as S from './styles';
import SearchSelect from '../../utils/SearchSelect';
import Table from './components/Table';
import InputSearchText from '../../utils/InputSearchText';
import InputDate from '../../utils/InputDate';
import Button from '../../utils/Button';
import { useData } from '../../context/SalesContext';
import { payStatusOptions, payTypeOptions } from './contants/options';

const Home = () => {
  const { dataSales, isLoading, isError } = useData();
  const [payStatus, setPayStatus] = useState<string>('Status');
  const [payType, setPayType] = useState<string>('Pagamento');
  const [inputSearch, setInputSearch] = useState<string>('');
  const [dateFrom, setDateFrom] = useState<string>('');
  const [dateTo, setDateTo] = useState<string>('');
  console.log(payStatus);
  console.log(payType);
  console.log(inputSearch);
  console.log(dateFrom, dateTo);
  return (
    <div>
      <S.ContainerInputs>
        <InputSearchText onChange={(e) => setInputSearch(e.currentTarget.value)} />
        <SearchSelect
          defaultValue={payStatus}
          options={payStatusOptions}
          onChange={(e) => setPayStatus(e.currentTarget.value)}
        />
        <SearchSelect
          defaultValue='Pagamento'
          options={payTypeOptions}
          onChange={(e) => setPayType(e.currentTarget.value)}
        />
        <InputDate label='De:' onChange={(e) => setDateFrom(e.currentTarget.value)} />
        <InputDate label='Até:' onChange={(e) => setDateTo(e.currentTarget.value)} />
        <Button height='1.8rem' width='5rem' value='Aplicar' />
        <S.Span>Limpar</S.Span>
      </S.ContainerInputs>
      <Table dataSales={dataSales} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default Home;
