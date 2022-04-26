import React, { Component } from "react";

export default class ProfileInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileFirstName: props.name.firstName,
      profileLastName: props.name.lastName,
      degree: props.degree,
      university: props.university,
      phone: props.phone,
      email: props.email,
      profileNameError: "",
      profileNameSuccess: "",
      profileNameLoading: false,
    };
  }
  render() {
    return (
      <div>
        <div className="profile-info">
          <img src={process.env.PUBLIC_URL + "../img/profile.png"} alt="placeholder" />
          <h3>
            {this.state.profileFirstName} {this.state.profileLastName}
          </h3>
          <span>{this.state.degree}</span>
          <p>{this.state.university}</p>
          <a href="tel:+{this.state.phone}">+{this.state.phone}</a>
          <a href="mailto:{this.state.email}">{this.state.email}</a>
        </div>
      </div>
    );
  }
}
