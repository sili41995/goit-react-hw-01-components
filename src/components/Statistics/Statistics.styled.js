import styled from '@emotion/styled';

const border = '1px solid grey';

export const Section = styled.section`
  width: 500px;
  text-align: center;
  margin-bottom: ${({ theme }) => `${theme.cardMargin}px`};
`;

export const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => `${theme.spacing * 5}px`};
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  border: ${border};
  border-radius: 16px;
  overflow: hidden;
  & li:not(:last-child) {
    border-right: ${border};
  }
`;

export const Item = styled.li`
  flex-basis: calc((100% - 0px) / 4);
  padding: ${({ theme }) => `${theme.spacing * 4}px`};
  background-color: ${() =>
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`};
  & span {
    display: block;
    text-align: center;
  }
`;

export const Percentage = styled.span`
  font-size: 20px;
`;
