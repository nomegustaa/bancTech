import AppRoutes from './routes/AppRoutes';
import { SalesProvider } from './context/SalesContext';
import { GlobalStyle } from './styles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SalesProvider>
        <GlobalStyle />
        <AppRoutes />
      </SalesProvider>
    </ThemeProvider>
  );
};

export default App;
