import { SalesContext } from '../../../../context/SalesContext';
import Loading from '../../../../utils/Loading';
import formatDate from '../../../../helpers/formatDate';
import * as S from './styles';
import { useContext } from 'react';
import formatSales from '../../../../helpers/formatSales';

const LoadingColumn = () => {
  const tdShimmer = [];

  for (let i = 0; i <= 5; i++) {
    tdShimmer.push(
      <S.TableBodyTd key={i}>
        <Loading />
      </S.TableBodyTd>,
    );
  }
  return tdShimmer;
};

const Table = () => {
  const { dataSales, isLoading } = useContext(SalesContext);

  return (
    <S.ContainerTable>
      <S.Table>
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc' }}>
            <S.TableHeaderTd>Nome</S.TableHeaderTd>
            <S.TableHeaderTd>Pagamento</S.TableHeaderTd>
            <S.TableHeaderTd>Parcelas</S.TableHeaderTd>
            <S.TableHeaderTd>Data</S.TableHeaderTd>
            <S.TableHeaderTd>Preço</S.TableHeaderTd>
            <S.TableHeaderTd>Status</S.TableHeaderTd>
          </tr>
        </thead>
        <S.TableBody>
          {isLoading && <tr>{LoadingColumn()}</tr>}
          {dataSales &&
            dataSales.map((item) => {
              return (
                <tr key={item.id}>
                  <S.TableBodyTd>{item.nome}</S.TableBodyTd>
                  <S.TableBodyTd>{item.pagamento.replace('cartao', 'cartão')}</S.TableBodyTd>
                  <S.TableBodyTd>{item.parcelas === null ? '-' : item.parcelas}</S.TableBodyTd>
                  <S.TableBodyTd>{formatDate(item.data)}</S.TableBodyTd>
                  <S.TableBodyTd>{formatSales(item.preco)}</S.TableBodyTd>
                  <S.TableBodyTdStatus status={item.status}>{item.status}</S.TableBodyTdStatus>
                </tr>
              );
            })}
        </S.TableBody>
      </S.Table>
    </S.ContainerTable>
  );
};

export default Table;
