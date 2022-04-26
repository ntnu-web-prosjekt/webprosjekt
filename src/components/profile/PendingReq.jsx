import React, { Component } from "react";

export default class PendingReq extends Component {
  constructor(props) {
    super(props);
    console.log(props._id);
    this.state = {
      user: props.user,
      pendingReq: [],
    };
  }

  async componentDidMount() {
    await fetch(
      `https://exammatcher-server.herokuapp.com/requests/${this.props._id}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ pendingReq: data });
        console.log(data);
      });
  }
  render() {
    return (
      <div className="pendingReq-container">
        <h2>Pending Requests</h2>
        <ul>
          {this.state.pendingReq.map((pendingReq, index) => {
            return (
              <li key={index}>
                <span>{pendingReq}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
