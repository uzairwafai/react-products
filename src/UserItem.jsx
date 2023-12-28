function UserItem({ item }) {
  return (
    <div>
      <h1> {item.login}</h1>
      <img
        src={item.avatar_url}
        width={200}
        height={200}
        className="m-2 rounded-full"
      />
    </div>
  );
}

export default UserItem;
