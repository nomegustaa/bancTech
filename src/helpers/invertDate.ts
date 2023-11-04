import { SalesDay } from '../modules/Home/components/SalesChart/interface';

const invertDate = (date: SalesDay[]) => {
  const invertDate = date.map((data) => {
    const parts = data.data.split('-');
    if (parts.length === 2) {
      return { ...data, data: `${parts[1]}-${parts[0]}` };
    }
    return data;
  });
  return invertDate;
};

export default invertDate;
