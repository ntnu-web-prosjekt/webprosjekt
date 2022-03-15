import React, { Component } from "react";

export default class ProfileInfo extends Component {
  render() {
    return (
      <div>
        <h2>My Profile</h2>
        <div>
          <img src="http://placehold.it/" alt="placeholder" />
          <h3>John Wayne</h3>
          <span>Associate Professor</span>
        </div>
      </div>
    );
  }
}
