import { ISales } from '../context/interface';
import { SalesDay } from '../modules/Home/components/SalesChart/interface';

const tranformData = (data: ISales[]) => {
  const days = data.reduce((acc: { [key: string]: SalesDay }, item) => {
    const day = item.data.split(' ')[0];
    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[day][item.status] += item.preco;
    return acc;
  }, {});
  return Object.values(days).map((dia) => ({ ...dia, data: dia.data.substring(5) }));
};

export default tranformData;
