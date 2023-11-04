import { useContext } from 'react';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { SalesContext } from '../../../../context/SalesContext';
import tranformData from '../../../../helpers/transformData';
import * as S from './styles';
import invertDate from '../../../../helpers/invertDate';

const SalesChart = () => {
  const { dataSales } = useContext(SalesContext);
  const dataTransform = tranformData(dataSales);
  const invertedData = invertDate(dataTransform);

  return (
    <S.ContainerChart>
      <ResponsiveContainer width='99%' height={400}>
        <LineChart data={invertedData}>
          <XAxis dataKey='data' />
          <Tooltip />
          <Legend />
          <Line type='linear' dataKey='pago' stroke='#008000' strokeWidth={2} />
          <Line type='linear' dataKey='falha' stroke='#ff0000' strokeWidth={2} />
          <Line type='linear' dataKey='processando' stroke='#cfaf04' strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </S.ContainerChart>
  );
};

export default SalesChart;
