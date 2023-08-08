import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import user from 'user';
import data from 'data';
import friends from 'friends';

const { avatar, location, stats, tag, username } = user;

function App() {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
