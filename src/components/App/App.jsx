import user from 'user.json';
import css from 'components/App/App.styled';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';
import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';

const { Container } = css;

const App = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <Container>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Container>
  );
};

export default App;
