import styled from '@emotion/styled';

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled.li`
  width: 280px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: white;
  border: 3px solid grey;
  border-radius: 10px;
`;

const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => getColorByStatus(isOnline)};
`;

const Image = styled.img`
  border: 1px solid grey;
  border-radius: 5px;
`;

const Name = styled.p`
  font-size: 24px;
`;

function getColorByStatus(isOnline) {
  switch (isOnline) {
    case true:
      return 'greenyellow';

    case false:
      return 'red';

    default:
      return 'grey';
  }
}

const css = { List, Item, Status, Image, Name };

export default css;
