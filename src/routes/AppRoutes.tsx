import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as S from './style';
import iconLogo from '../assets/iconLogo.png';
import Home from '../modules/Home';
import Sales from '../modules/Home/components/Sales';

const AppRoutes = () => {
  return (
    <S.Container>
      <img src={iconLogo} width={'40px'} alt='icon-logo-money' />
      <S.Title>BancTech</S.Title>
      <S.ContainerContent>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/vendas/:id' element={<Sales />} />
          </Routes>
        </BrowserRouter>
      </S.ContainerContent>
    </S.Container>
  );
};

export default AppRoutes;
