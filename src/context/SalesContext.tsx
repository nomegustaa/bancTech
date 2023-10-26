import { ReactNode, createContext, useEffect, useState } from 'react';
import { api } from '../config/api';

interface ISalesProvider {
  children: ReactNode;
}

interface ISales {
  id: string;
  nome: string;
  preco: number;
  status: string;
  pagamento: string;
  parcelas: number | null;
  data: string;
}

interface SalesContextData {
  dataSales: ISales[];
  isLoading: boolean;
}

export const SalesContext = createContext<SalesContextData>({} as SalesContextData);

export const SalesProvider = ({ children }: ISalesProvider) => {
  const [dataSales, setDataSales] = useState<ISales[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getSales = async () => {
    setIsLoading(true);
    try {
      const responseSales = await api.get('/vendas');
      setDataSales(responseSales.data);
    } catch (e) {
      throw Error('Erro ao acessar api');
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getSales();
  }, []);

  return <SalesContext.Provider value={{ dataSales, isLoading }}>{children}</SalesContext.Provider>;
};
