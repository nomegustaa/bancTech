import * as S from './styles';
import Table from './components/Table';
import InputDate from '../../utils/InputDate';
import { useData } from '../../context/SalesContext';
import SalesChart from './components/SalesChart';
import iconLogo from '../../../public/dinheiro.png';

const Home = () => {
  const { dateTo, dateFrom, setDateFrom, setDateTo } = useData();

  return (
    <S.Container>
      <img src={iconLogo} width={'40px'} alt='icon-logo-money' />
      <S.ContainerContent>
        <S.Title>BancTech</S.Title>
        <S.ContainerInputs>
          <InputDate label='De:' value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
          <InputDate label='Até:' value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
        </S.ContainerInputs>

        <S.ContainerSection>
          <SalesChart />
          <Table />
        </S.ContainerSection>
      </S.ContainerContent>
    </S.Container>
  );
};

export default Home;
