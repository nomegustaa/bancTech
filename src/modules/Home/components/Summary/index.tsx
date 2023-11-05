import { useData } from '../../../../context/SalesContext';
import totalSummary from '../../../../helpers/totalSummary';
import BoxData from '../../../../utils/BoxData';
import * as S from './style';

const Summary = () => {
  const { dataSales } = useData();

  const totalPaidOut = totalSummary(dataSales, 'pago');
  const totalFailure = totalSummary(dataSales, 'falha');
  const totalProcessing = totalSummary(dataSales, 'processando');

  return (
    <div>
      <S.Title>Resumo de vendas</S.Title>
      <S.ContainerBox>
        <BoxData>
          <S.ParagraphPaidOut>Pago</S.ParagraphPaidOut>
          <S.ParagraphPaidOut>{totalPaidOut}</S.ParagraphPaidOut>
        </BoxData>
        <BoxData>
          <S.ParagraphFailure>Falha</S.ParagraphFailure>
          <S.ParagraphFailure>{totalFailure}</S.ParagraphFailure>
        </BoxData>
        <BoxData>
          <S.ParagraphProcessing>Processando</S.ParagraphProcessing>
          <S.ParagraphProcessing>{totalProcessing}</S.ParagraphProcessing>
        </BoxData>
      </S.ContainerBox>
    </div>
  );
};

export default Summary;
