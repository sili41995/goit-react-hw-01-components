import styled from '@emotion/styled';

export const FriendCard = styled.li`
  width: 300px;
  padding: ${({ theme }) => `${theme.spacing * 4}px`};
  border: 1px solid grey;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => `${theme.spacing * 5}px`};
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'greenyellow' : 'red')};
`;

export const Image = styled.img`
  border: 1px solid black;
  border-radius: 8px;
  padding: ${({ theme }) => `${theme.spacing * 2}px`};
  width: 80px;
`;

export const Name = styled.p``;
