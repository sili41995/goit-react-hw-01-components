import PropTypes from 'prop-types';
import css from 'components/Profile/Profile.styled';

const {
  Container,
  Description,
  Image,
  Name,
  Location,
  Tag,
  Stats,
  Item,
  Label,
  Quantity,
} = css;

const Profile = ({ username, tag, location, avatar, stats }) => {
  const keys = Object.keys(stats);

  return (
    <Container>
      <Description>
        <Image src={avatar} alt='User avatar' />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        {keys.map((key) => (
          <Item key={key}>
            <Label>{key}</Label>
            <Quantity>{stats[key]}</Quantity>
          </Item>
        ))}
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Profile;
