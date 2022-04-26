import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class catalogueEntry extends Component {
  constructor() {
    super();

    this.handleView = this.handleView.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleView = (e) => {
    // redirect to view

    window.location.href = "/request/" + this.props.data._id;
  };
  handleEdit = (e) => {
    // redirect to edit
    window.location.href = "/edit/" + this.props.data._id;
  };
  render() {
    return (
      <tr>
        <td>{`${this.props.data.startDate.getDate()}.${this.props.data.startDate.getMonth()}.${this.props.data.startDate.getFullYear()}`}</td>
        <td>{`${this.props.data.endDate.getDate()}.${this.props.data.endDate.getMonth()}.${this.props.data.endDate.getFullYear()}`}</td>
        <td>{this.props.data.subjectName}</td>
        <td>
          <Link to={"/request/" + this.props.data._id}>View</Link>
          {JSON.parse(sessionStorage.getItem("token")).role === 1 ? (
            <Link to={"/edit/" + this.props.data._id}> Edit </Link>
          ) : null}
        </td>
      </tr>
    );
  }
}
