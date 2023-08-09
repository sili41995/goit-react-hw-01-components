import styled from '@emotion/styled';

export const Table = styled.table`
  width: 500px;
`;

export const Head = styled.thead`
  & tr {
    background-color: aquamarine;
  }
`;

export const Body = styled.tbody``;

export const Row = styled.tr`
  background-color: ${({ index }) => (index % 2 !== 0 ? 'lightgrey' : 'white')};
`;

export const Header = styled.th`
  padding: ${({ theme }) => `${theme.spacing * 4}px`};
`;

export const Data = styled.td`
  padding: ${({ theme }) => `${theme.spacing * 4}px`};
  text-align: center;
`;
