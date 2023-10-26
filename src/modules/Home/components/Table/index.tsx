import { SalesContext } from '../../../../context/SalesContext';
// import Loading from '../../../../utils/Loading';
import * as S from './styles';
import { useContext } from 'react';

const Table = () => {
  const { dataSales } = useContext(SalesContext);

  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableCell>Nome</S.TableCell>
          <S.TableCell>Pagamento</S.TableCell>
          <S.TableCell>Parcelas</S.TableCell>
          <S.TableCell>Data</S.TableCell>
          <S.TableCell>Preço</S.TableCell>
          <S.TableCell>Status</S.TableCell>
        </tr>
      </thead>
      <tbody>
        {/* {isLoading && <Loading />} */}
        {dataSales &&
          dataSales.map((item) => (
            <tr key={item.id}>
              <S.TableCell>{item.nome}</S.TableCell>
              <S.TableCell>{item.pagamento}</S.TableCell>
              <S.TableCell>{item.parcelas}</S.TableCell>
              <S.TableCell>{item.data}</S.TableCell>
              <S.TableCell>{item.preco}</S.TableCell>
              <S.TableCell>{item.status}</S.TableCell>
            </tr>
          ))}
      </tbody>
    </S.Table>
  );
};

export default Table;
