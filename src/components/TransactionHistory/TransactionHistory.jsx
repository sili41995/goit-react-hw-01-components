import PropTypes from 'prop-types';
import {
  Table,
  Body,
  Row,
  Head,
  Data,
  Header,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => (
  <Table>
    <Head>
      <Row>
        <Header>Type</Header>
        <Header>Amount</Header>
        <Header>Currency</Header>
      </Row>
    </Head>
    <Body>
      {items.map(({ amount, type, id, currency }, index) => (
        <Row key={id} index={index}>
          <Data>{type}</Data>
          <Data>{amount}</Data>
          <Data>{currency}</Data>
        </Row>
      ))}
    </Body>
  </Table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TransactionHistory;
