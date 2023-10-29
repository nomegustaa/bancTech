const formatSales = (sales: number) => {
  return sales.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
};

export default formatSales;
