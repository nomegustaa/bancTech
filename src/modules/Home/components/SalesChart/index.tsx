import { useContext } from 'react';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { SalesContext } from '../../../../context/SalesContext';
import tranformData from '../../../../helpers/transformData';

const SalesChart = () => {
  const { dataSales } = useContext(SalesContext);
  const dataTransform = tranformData(dataSales);

  return (
    <ResponsiveContainer width='99%' height={400}>
      <LineChart data={dataTransform}>
        <XAxis dataKey='data' />
        <Tooltip />
        <Legend />
        <Line type='linear' dataKey='pago' stroke='#008000' strokeWidth={2} />
        <Line type='linear' dataKey='falha' stroke='#ff0000' strokeWidth={2} />
        <Line type='linear' dataKey='processando' stroke='#cfaf04' strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
