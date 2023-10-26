import AppRoutes from './routes/AppRoutes';
import { SalesProvider } from './context/SalesContext';
import { GlobalStyle } from './styles';

const App = () => {
  return (
    <SalesProvider>
      <GlobalStyle />
      <AppRoutes />
    </SalesProvider>
  );
};

export default App;
