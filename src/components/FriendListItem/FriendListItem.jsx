import PropTypes from 'prop-types';
import { FriendCard, Image, Status, Name } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <FriendCard>
    <Status isOnline={isOnline}></Status>
    <Image src={avatar} alt='User avatar' width='48' />
    <Name>{name}</Name>
  </FriendCard>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
