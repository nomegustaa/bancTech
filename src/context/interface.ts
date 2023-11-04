import { ReactNode } from 'react';

export interface ISalesProvider {
  children: ReactNode;
}

export interface ISales {
  id: string;
  nome: string;
  preco: number;
  status: 'processando' | 'pago' | 'falha';
  pagamento: 'boleto' | 'cartao' | 'pix';
  parcelas: number | null;
  data: string;
}

export interface SalesContextData {
  dataSales: ISales[];
  isLoading: boolean;
  isError: boolean;
  dateTo: string;
  setDateTo: React.Dispatch<React.SetStateAction<string>>;
  dateFrom: string;
  setDateFrom: React.Dispatch<React.SetStateAction<string>>;
}
