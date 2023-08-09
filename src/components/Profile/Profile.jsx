import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Avatar,
  Text,
  Stats,
  Stat,
  StatDesc,
  StatValue,
  Name,
} from './Profile.styled';

const Profile = ({ avatar, location, stats, tag, username }) => (
  <Container>
    <Description>
      <Avatar src={avatar} alt='User avatar' />
      <Name>{username}</Name>
      <Text>@{tag}</Text>
      <Text>{location}</Text>
    </Description>
    <Stats>
      {Object.keys(stats).map((key) => (
        <Stat key={key}>
          <StatDesc>{key}</StatDesc>
          <StatValue>{stats[key]}</StatValue>
        </Stat>
      ))}
    </Stats>
  </Container>
);

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
export default Profile;
