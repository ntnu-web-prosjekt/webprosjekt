import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="title">
          <h2>Filters</h2>
        </div>
        <div>Tags</div>
        <div>Start date / End date</div>
        <div>Location</div>
        <div>Search</div>
      </div>
    );
  }
}
