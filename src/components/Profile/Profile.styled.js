import styled from '@emotion/styled';

const border = '1px solid grey';

export const Container = styled.div`
  width: 400px;
  border: 1px solid grey;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: ${({ theme }) => `${theme.cardMargin}px`};
`;

export const Description = styled.div`
  padding: ${({ theme }) => `${theme.spacing * 5}px`};
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: ${border};
`;

const textStyle = `text-align: center;
  font-size: 30px;`;

export const Text = styled.p`
  ${textStyle}
`;

export const Name = styled.p`
  ${textStyle};
  margin-top: 16px;
  font-weight: 700;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  background-color: lightgray;
  border-top: ${border};
  & li:not(:last-child) {
    border-right: ${border};
  }
`;

export const Stat = styled.li`
  flex-basis: calc((100% - 0px) / 2);
  padding: ${({ theme }) => `${theme.spacing * 4}px`};
`;

export const StatDesc = styled.p`
  text-transform: capitalize;
  text-align: center;
`;

export const StatValue = styled.p`
  text-align: center;
  font-weight: 700;
`;
