function User({ item, avatar, name }) {
  return (
    <div>
      <li className="user">
        <img src={avatar} alt="avatar" />
        <h2>{name}</h2>
        <button>More</button>
      </li>
    </div>
  );
}
export default User;
