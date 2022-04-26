import React, { Component } from "react";

export default class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMe: props.description,
      aboutMeError: "",
      aboutMeSuccess: "",
      aboutMeLoading: false,
    };
  }
  render() {
    return (
      <div className="aboutMe">
        <h2>About Me</h2>
        <p>{this.state.aboutMe}</p>
      </div>
    );
  }
}
