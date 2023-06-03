import styled from '@emotion/styled';

const TransactionTable = styled.table`
  border-collapse: collapse;
  width: 600px;
  border: 2px solid grey;
`;

const TableHead = styled.thead`
  background-color: cornflowerblue;
`;

const TableHeader = styled.th`
  width: calc((100%) / 3);
  padding: 10px;
  text-transform: uppercase;
  border: 1px solid white;
`;

const TableData = styled.td`
  padding: 5px;
  text-transform: capitalize;
  text-align: center;
  border: 1px solid grey;
`;

const TableRow = styled.tr`
  background-color: white;
  &:nth-child(even) {
    background-color: lightgray;
  }
`;

const css = { TransactionTable, TableHead, TableHeader, TableData, TableRow };

export default css;
