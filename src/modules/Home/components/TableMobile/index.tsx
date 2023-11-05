import { useState } from 'react';
import { useData } from '../../../../context/SalesContext';
import formatDate from '../../../../helpers/formatDate';
import formatSales from '../../../../helpers/formatSales';
import Loading from '../../../../utils/Loading';
import * as S from './style';
import ButtonShowView from '../../../../utils/ButonShowView';
import BoxData from '../../../../utils/BoxData';

const TableMobile = () => {
  const { dataSales, isLoading, isError } = useData();
  const [showView, setShowView] = useState<{ [key: string]: boolean }>({});

  const handleShowView = (id: string) => {
    setShowView((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div>
      {isError && <p>Erro ao acesso api</p>}
      {isLoading && (
        <BoxData>
          <Loading lineLoading={5} />
        </BoxData>
      )}
      {dataSales &&
        dataSales.map((data) => {
          return (
            <BoxData key={data.id}>
              <p>Nome: {data.nome}</p>
              <p>Pagamento: {data.pagamento.replace(/ao/gi, 'ão')}</p>
              {showView[data.id] && (
                <>
                  <p>Parcelas: {data.parcelas === null ? '-' : data.parcelas}</p>
                  <p>Data: {formatDate(data.data)}</p>
                  <p>Preço: {formatSales(data.preco)}</p>
                  <p>
                    Status:{' '}
                    <S.ParagraphStatus status={data.status}>{data.status}</S.ParagraphStatus>
                  </p>
                </>
              )}
              <ButtonShowView
                onClick={() => handleShowView(data.id)}
                isExpand={showView}
                itemId={data.id}
              />
            </BoxData>
          );
        })}
    </div>
  );
};

export default TableMobile;
