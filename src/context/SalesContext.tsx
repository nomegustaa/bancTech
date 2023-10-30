import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../config/api';
import { ISales, ISalesProvider, SalesContextData } from './interface';

export const SalesContext = createContext<SalesContextData>({} as SalesContextData);

export const SalesProvider = ({ children }: ISalesProvider) => {
  const [dataSales, setDataSales] = useState<ISales[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const getSales = async () => {
    setIsLoading(true);
    try {
      const responseSales = await api.get('/vendas');
      setDataSales(responseSales.data);
    } catch (e) {
      setIsError(true);
      console.log('Error', e);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getSales();
  }, []);

  return (
    <SalesContext.Provider value={{ dataSales, isLoading, isError }}>
      {children}
    </SalesContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => {
  return useContext(SalesContext);
};
