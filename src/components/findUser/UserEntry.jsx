import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./userEntry.scss";

export default class UserEntry extends Component {
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
        <td className="User-entry-name" onClick={this.handleClick}>
          <Link to={"/users/" + this.props.id}>{this.props.name}</Link>
        </td>
        <td>{this.props.university}</td>
        <td>{this.props.degree}</td>
        <td>{this.props.tags}</td>
      </tr>
    );
  }
}
