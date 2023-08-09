import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  margin-bottom: ${({ theme }) => `${theme.cardMargin}px`};
  & li:not(:last-child) {
    margin-bottom: ${({ theme }) => `${theme.spacing * 4}px`};
  }
`;
