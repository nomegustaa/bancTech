// import { useParams } from 'react-router-dom';
import BoxData from '../../../../utils/BoxData';

const Sales = () => {
  // const { id } = useParams();

  return (
    <BoxData>
      <p>Nome: </p>
      <p>Pagamento: </p>
      <p>Parcelas: </p>
      <p>Data: </p>
      <p>Preço: </p>
      <p>Status: </p>
    </BoxData>
  );
};

export default Sales;
