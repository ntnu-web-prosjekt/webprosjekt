import React, { Component } from "react";

export default class ProfileImage extends Component {
  render() {
    return (
      <div className="profile-image">
        <h2>Profile Image</h2>
        <img src="https://via.placeholder.com/200" alt="placeholder" />
        <button type="button">Change Image</button>
      </div>
    );
  }
}
