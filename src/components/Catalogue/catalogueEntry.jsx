import React, { Component } from "react";

export default class catalogueEntry extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (e) => {
    if (e.name === "view") console.log("view");
    else console.log("edit");
  };
  render() {
    return (
      <tr>
        <td>{`${this.props.data.startDate.getDate()}.${this.props.data.startDate.getMonth()}.${this.props.data.startDate.getFullYear()}`}</td>
        <td>{`${this.props.data.endDate.getDate()}.${this.props.data.endDate.getMonth()}.${this.props.data.endDate.getFullYear()}`}</td>
        <td>{this.props.data.subjectName}</td>
        <td>
          <button onClick={this.handleClick} name="view">
            View
          </button>
          <button onClick={this.handleClick}>Edit</button>
        </td>
      </tr>
    );
  }
}
