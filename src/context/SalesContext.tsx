import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../config/api';
import { ISales, ISalesProvider, SalesContextData } from './interface';
import getDate from '../helpers/getDate';

export const SalesContext = createContext<SalesContextData>({} as SalesContextData);

export const SalesProvider = ({ children }: ISalesProvider) => {
  const [dataSales, setDataSales] = useState<ISales[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [dateFrom, setDateFrom] = useState<string>(getDate(30));
  const [dateTo, setDateTo] = useState<string>(getDate(0));

  useEffect(() => {
    const getSales = async () => {
      setIsLoading(true);
      try {
        const responseSales = await api.get(`/vendas/?inicio=${dateFrom}&final=${dateTo}`);
        setDataSales(responseSales.data);
      } catch (e) {
        setIsError(true);
        console.log('Error', e);
      } finally {
        setIsLoading(false);
      }
    };

    getSales();
  }, [dateFrom, dateTo]);

  return (
    <SalesContext.Provider
      value={{ dataSales, isLoading, isError, dateFrom, setDateFrom, dateTo, setDateTo }}
    >
      {children}
    </SalesContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => {
  return useContext(SalesContext);
};
