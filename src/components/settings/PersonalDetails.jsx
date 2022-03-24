import React, { Component } from "react";
import Tags from "../profile/Tags";
import "../profile/profile.scss";
export default class PersonalDetails extends Component {
  render() {
    return (
      <div className="Personal-details">
        <h2>Personal Details</h2>
        <label>First name</label>
        <input type="text" />
        <br />
        <label>Last name</label>
        <input type="text" />
        <br />
        <label>Title</label>
        <select>
          <option value="test">Assistant Professor</option>
          <option value="test">Associate Professor</option>
          <option value="test">Professor</option>
          <option value="test">Instructor</option>
          <option value="test">Professor Emeritus</option>
        </select>
        <br />
        <label>University</label>
        <select>
          <option value="test">NTNU Gjøvik</option>
          <option value="test">NTNU Ålesund</option>
          <option value="test">NTNU Trondheim</option>
          <option value="test">UiO</option>
          <option value="test">NMBU</option>
          <option value="test">Høgskolen i Innlandet</option>
        </select>
        <br />
        <label>Phone Number</label>
        <input type="tel" />
        <br />
        <label>Email</label>
        <input type="email" />

        <Tags />
      </div>
    );
  }
}
