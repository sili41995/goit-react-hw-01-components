const FriendListItem = ({ id, avatar, name, isOnline }) => (
  <li key={id} class='item'>
    <span isOnline={isOnline} class='status'></span>
    <img class='avatar' src={avatar} alt='User avatar' width='48' />
    <p class={name}></p>
  </li>
);

export default FriendListItem;
