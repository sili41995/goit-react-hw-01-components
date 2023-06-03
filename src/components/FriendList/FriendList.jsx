import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.styled';

const { List, Item, Status, Image, Name } = css;

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Item key={id}>
          <Status isOnline={isOnline}></Status>
          <Image src={avatar} alt='User avatar' width='48' />
          <Name>{name}</Name>
        </Item>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
