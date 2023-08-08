import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul class='friend-list'>
      {friends.map(({ avatar, name, isOnline }) => (
        <FriendListItem />
      ))}
    </ul>
  );
};

export default FriendList;
