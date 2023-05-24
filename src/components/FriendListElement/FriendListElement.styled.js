import styled from '@emotion/styled';

export const FriendsItem = styled.li`
  width: 280px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: white;
  border: 3px solid grey;
  border-radius: 10px;
`;

export const FriendsItemStatus = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    switch (isOnline) {
      case true:
        return 'greenyellow';

      case false:
        return 'red';

      default:
        return 'grey';
    }
  }};
`;

export const FriendsItemImage = styled.img`
  border: 1px solid grey;
  border-radius: 5px;
`;

export const FriendsItemName = styled.p`
  font-size: 24px;
`;
