import { ISales } from '../context/interface';

const totalSummary = (data: ISales[], statusType: string) => {
  return data
    .filter((i) => i.status === statusType)
    .reduce((acc, item) => acc + item.preco, 0)
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
};

export default totalSummary;
