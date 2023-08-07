const Profile = ({ avatar, location, stats, tag, username }) => (
  <div class='profile'>
    <div class='description'>
      <img src={avatar} alt='User avatar' class='avatar' />
      <p class='name'>{username}</p>
      <p class='tag'>@{tag}</p>
      <p class='location'>{location}</p>
    </div>
    <ul class='stats'>
      {Object.keys(stats).map((key) => (
        <li key={key}>
          <p>{key}</p>
          <p>{stats[key]}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Profile;
