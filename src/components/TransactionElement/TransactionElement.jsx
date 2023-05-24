import PropTypes from 'prop-types';
import { TableData, TableRow } from './TransactionElement.styled';

export const TransactionElement = ({ type, amount, currency }) => {
  return (
    <TableRow>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableRow>
  );
};

TransactionElement.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
