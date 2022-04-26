import React, { Component } from "react";

export default class catalogueEntry extends Component {
  constructor() {
    super();

    this.handleView = this.handleView.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleView = (e) => {
    // redirect to view

    window.location.href = "/request/" + this.props._id;
  };
  handleEdit = (e) => {
    // redirect to edit
    window.location.href = "/edit/" + this.props._id;
  };
  render() {
    return (
      <tr>
        <td>{`${this.props.data.startDate.getDate()}.${this.props.data.startDate.getMonth()}.${this.props.data.startDate.getFullYear()}`}</td>
        <td>{`${this.props.data.endDate.getDate()}.${this.props.data.endDate.getMonth()}.${this.props.data.endDate.getFullYear()}`}</td>
        <td>{this.props.data.subjectName}</td>
        <td>
          <button onClick={this.handleView} name="view">
            View
          </button>
          {JSON.parse(sessionStorage.getItem("token")).role === 1 ? (
            <button onClick={this.handleEdit}>Edit</button>
          ) : null}
        </td>
      </tr>
    );
  }
}
