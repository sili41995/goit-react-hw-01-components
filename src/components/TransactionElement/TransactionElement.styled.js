import styled from '@emotion/styled';

export const TableData = styled.td`
  padding: 5px;
  text-transform: capitalize;
  text-align: center;
  border: 1px solid grey;
`;

export const TableRow = styled.tr`
  background-color: white;
  &: nth-child(even) {
    background-color: lightgray;
  }
`;
