import User from "./User";

function Users({users,clearform}) {
  return (
    <div>
      {users.length !== 0 && (
        <div>
          <button className="clear" onClick={clearform}>
            Clear
          </button>
          <ul className="users">
            {users?.items?.map((item) => {
              return (
                <User key={item?.id} avatar={item?.avatar_url} name={item?.login}/>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Users;
