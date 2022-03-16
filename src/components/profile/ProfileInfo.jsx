import React, { Component } from "react";

export default class ProfileInfo extends Component {
  render() {
    return (
      <div>
        <h2>My Profile</h2>
        <div className="profile-info">
          <img src="https://via.placeholder.com/200" alt="placeholder" />
          <h3>John Wayne</h3>
          <span>Associate Professor</span>
          <p>NTNU Gjøvik</p>
          <a href="tel:+4733378901">+47 333 78 901</a>
          <a href="mailto:someone@example.com">Send email</a>
        </div>
      </div>
    );
  }
}
