import * as S from './styles';
import Table from './components/Table';
import InputDate from '../../utils/InputDate';
import { useData } from '../../context/SalesContext';
import SalesChart from './components/SalesChart';
import iconLogo from '../../assets/iconLogo.png';
import TableMobile from './components/TableMobile';
import { useEffect, useState } from 'react';

const Home = () => {
  const { dateTo, dateFrom, setDateFrom, setDateTo } = useData();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
          {screenWidth <= 800 ? <TableMobile /> : <Table />}
        </S.ContainerSection>
      </S.ContainerContent>
    </S.Container>
  );
};

export default Home;
