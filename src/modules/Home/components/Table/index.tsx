import Loading from '../../../../utils/Loading';
import formatDate from '../../../../helpers/formatDate';
import * as S from './styles';
import formatSales from '../../../../helpers/formatSales';
import { useData } from '../../../../context/SalesContext';
import { ArrowCircleRight } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';

const LoadingColumn = () => {
  const tdShimmer = [];

  for (let i = 0; i <= 5; i++) {
    tdShimmer.push(
      <S.TableBodyTd key={i}>
        <Loading lineLoading={10} />
      </S.TableBodyTd>,
    );
  }
  return tdShimmer;
};

const Table = () => {
  const { dataSales, isLoading, isError } = useData();
  return (
    <S.ContainerTable>
      <S.Table>
        <thead>
          <tr>
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
                  <S.TableBodyTd>{item.pagamento.replace(/ao/gi, 'ão')}</S.TableBodyTd>
                  <S.TableBodyTd>{item.parcelas === null ? '-' : item.parcelas}</S.TableBodyTd>
                  <S.TableBodyTd>{formatDate(item.data)}</S.TableBodyTd>
                  <S.TableBodyTd>{formatSales(item.preco)}</S.TableBodyTd>
                  <S.TableBodyTdStatus status={item.status}>{item.status}</S.TableBodyTdStatus>
                  <S.TableBodyTd>
                    <NavLink to={`/vendas/${item.id}`}>
                      <ArrowCircleRight
                        style={{ cursor: 'pointer' }}
                        size={30}
                        color='#4287f5'
                        weight='duotone'
                      />
                    </NavLink>
                  </S.TableBodyTd>
                </tr>
              );
            })}
          {isError && (
            <tr>
              <S.TableBodyTdError colSpan={6}>Erro ao acessar api</S.TableBodyTdError>
            </tr>
          )}
        </S.TableBody>
      </S.Table>
    </S.ContainerTable>
  );
};

export default Table;
