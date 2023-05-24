import PropTypes from 'prop-types';
import {
  FriendsItem,
  FriendsItemStatus,
  FriendsItemImage,
  FriendsItemName,
} from './FriendListElement.styled';

export const FriendListElement = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <FriendsItemStatus isOnline={isOnline}></FriendsItemStatus>
      <FriendsItemImage src={avatar} alt='User avatar' width='48' />
      <FriendsItemName>{name}</FriendsItemName>
    </FriendsItem>
  );
};

FriendListElement.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
