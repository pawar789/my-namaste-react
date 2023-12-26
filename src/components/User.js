function User(props) {
  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h1>Name : {props.name}</h1>
      <h2>Address : {props.address}</h2>
      <h3>Age : {props.age}</h3>
    </div>
  );
}

export default User;
