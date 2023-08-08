import FriendListItem from 'components/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul class='friend-list'>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          id={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
