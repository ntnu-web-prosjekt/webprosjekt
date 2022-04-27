import React, { Component } from "react";

export default class MyReview extends Component {
  render() {
    return (
      <div className="myReview">
        <h2>My Review</h2>
        <textarea
          placeholder="Review of teacher..."
          id="myReview"
          rows="8"
          cols="60"
        ></textarea>
        <button type="button">Edit</button>
      </div>
    );
  }
}
