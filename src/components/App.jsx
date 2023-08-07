import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import user from 'user';
import data from 'data';

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
    </>
  );
}

export default App;
