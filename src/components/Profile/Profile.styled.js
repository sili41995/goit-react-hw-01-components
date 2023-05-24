import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 330px;
  border-radius: 10px;
  border: 2px solid grey;
  overflow: hidden;
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const UserImage = styled.img`
  width: 200px;
  border-radius: 50%;
  border: 3px solid black;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
`;

export const UserLocation = styled.p`
  text-align: center;
`;

export const UserTag = styled.p`
  text-align: center;
`;

export const Stats = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  border-top: 1px solid black;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: calc((100% -0px) / 3);
  background-color: lightgray;
  padding: 10px;
  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;

export const StatsItemLabel = styled.span`
  font-size: 12px;
`;

export const StatsItemQuantity = styled.span`
  font-weight: 700;
  font-size: 20px;
`;
