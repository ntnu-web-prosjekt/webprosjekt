import React, { Component } from "react";

export default class catalogueEntry extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    console.log("Click happened");
  };
  render() {
    return (
      <tr>
        <td>{this.props.startdate}</td>
        <td>{this.props.enddate}</td>
        <td>{this.props.subject}</td>
        <td>
          <button onClick={this.handleClick}>View</button>
          <button onClick={this.handleClick}>Edit</button>
        </td>
      </tr>
    );
  }
}
