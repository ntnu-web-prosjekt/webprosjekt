import React, { Component } from "react";

export default class PersonalDetails extends Component {
  render() {
    return (
      <div className="Personal-details">
        <h2>Personal Details</h2>
        <label>
          First name
          <input type="text" />
        </label>
        <br />
        <label>
          Last name
          <input type="text" />
        </label>
        <br />
        <label>
          Title
          <select>
            <option value="test">test</option>
            <option value="test">test</option>
            <option value="test">test</option>
            <option value="test">test</option>
            <option value="test">test</option>
          </select>
        </label>
        <br />
        <label>
          University
          <select>
            <option value="test">test</option>
            <option value="test">test</option>
            <option value="test">test</option>
            <option value="test">test</option>
            <option value="test">test</option>
          </select>
        </label>
        <br />
        <label>
          Phone Number
          <input type="number" />
        </label>
        <br />
        <label>
          Email
          <input type="email" />
        </label>
      </div>
    );
  }
}
