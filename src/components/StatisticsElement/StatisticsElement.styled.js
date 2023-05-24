import styled from '@emotion/styled';

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  flex-basis: calc((100%-0px) / 5);
  background-color: ${getRandomHexColor};
`;

export const ItemLabel = styled.span`
  font-size: 12px;
  text-align: center;
  color: white;
`;

export const ItemPercentage = styled.span`
  font-size: 24px;
  text-align: center;
  color: white;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
