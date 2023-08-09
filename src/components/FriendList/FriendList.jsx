import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem';
import { List } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </List>
  );
};

FriendList.propTypse = {
  friends: PropTypes.shape({
    id: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendList;
