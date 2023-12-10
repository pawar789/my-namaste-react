function User(props) {
  return (
    <div className="userProfile">
      <h1>Name : {props.name}</h1>
      <h2>Address : {props.address}</h2>
      <h3>Age : {props.age}</h3>
    </div>
  );
}

export default User;
