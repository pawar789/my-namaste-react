import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 0,
      userInfo: {
        name: "dummy name",
        location: "dummy location",
      },
    };
    console.log("child constutor called");
  }

  async componentDidMount() {
    // console.log(this.props.name + "child component did mount called");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("componeny did update called");
  }
  componentWillUnmount() {
    console.log("Component Will Unmount");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    debugger;
    console.log("child render called");
    return (
      <div className="userProfile">
        <img src={avatar_url} />
        <h1>Name : {name}</h1>
        <h2>Address : {location}</h2>
        {/* <h3>Age : 23</h3> */}
        {/* <h2>Count: {this.state.count}</h2> */}
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Update Count
        </button>
        <h2>Count2: {this.state.count1}</h2>
      </div>
    );
  }
}
export default UserClass;

/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 *
 *
 *
 *
 */
