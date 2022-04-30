import React, { Component } from "react";
// import Tags from "../profile/Tags";
import "../profile/profile.scss";
const API_HOST = process.env.REACT_APP_API_URL;
export default class PersonalDetails extends Component {
  render() {
    return (
      <div className="Personal-details">
        <h2>Personal Details</h2>
        <form
          action={API_HOST + "/settings/update/data"}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <label>First name</label>
          <input type="text" />
          <br />
          <label>Last name</label>
          <input type="text" />
          <br />
          <label>Description</label>
          <textarea
            className="description"
            name="description"
            rows="4"
            cols="60"
            onChange={this.handleChange}
            placeholder="Type here..."
          />
          <br />
          <label>Phone Number</label>
          <input type="tel" />
          <br />
          <label>Email</label>
          <input type="email" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
