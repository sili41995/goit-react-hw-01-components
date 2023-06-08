import styled from '@emotion/styled';

const Container = styled.section`
  width: 400px;
  background-color: white;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
`;

const Title = styled.h2`
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
  color: gray;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  flex-basis: calc((100% - 0px) / 5);
  background-color: ${getRandomHexColor};
`;

const Label = styled.span`
  font-size: 12px;
  text-align: center;
  color: white;
`;

const Percentage = styled.span`
  font-size: 24px;
  text-align: center;
  color: white;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const css = { Container, Title, List, Item, Label, Percentage };

export default css;
