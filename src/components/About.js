// functional component
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constuctor called");
  }
  componentDidMount() {
    // console.log("parent component did mount called");
  }
  render() {
    // console.log("parent render called");

    return (
      <div>
        <h1>About Us</h1>
        {/* <User name={"Aman.P"} address={"Betul,Madhya Pradesh"} age={age} /> <br /> */}
        <UserClass name={"Rajat"} />
        {/* <UserClass name={"aman"} /> */}
      </div>
    );
  }
}

export default About;

// outout

// constructr callled
// render called
// component did mount calles
