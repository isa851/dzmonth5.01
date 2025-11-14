const Users = ({user}) => {


  return (
    <div>
        <h1>{user.name}</h1>
        <h2>{user.username}</h2>
        <p>{user.phone}</p>
    </div>
  );
};

export default Users;
