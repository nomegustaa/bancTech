import * as S from './styles';
import Table from './components/Table';

import InputDate from '../../utils/InputDate';
import { useData } from '../../context/SalesContext';
import SalesChart from './components/SalesChart';

const Home = () => {
  const { dateTo, dateFrom, setDateFrom, setDateTo } = useData();

  return (
    <div>
      <SalesChart />
      <S.ContainerInputs>
        <InputDate label='De:' value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
        <InputDate label='Até:' value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
      </S.ContainerInputs>
      <Table />
    </div>
  );
};

export default Home;
