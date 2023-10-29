import { format } from 'date-fns';

const formatDate = (date: string) => {
  return (date = format(new Date(date), 'dd/MM/yyyy - HH:mm:ss'));
};

export default formatDate;
