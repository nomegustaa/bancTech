import AppRoutes from './routes/AppRoutes';
import { SalesProvider } from './context/SalesContext';

const App = () => {
  return (
    <SalesProvider>
      <AppRoutes />
    </SalesProvider>
  );
};

export default App;
