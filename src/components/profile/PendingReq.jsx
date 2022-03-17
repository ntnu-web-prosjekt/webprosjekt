import React, { Component } from "react";

export default class PendingReq extends Component {
  render() {
    return (
      <div className="pendingReq-container">
        <h2>Pending Requests</h2>
        <ul>
          <li>
            Advanced CSS{" "}
            <button type="button" className="viewReqBtn">
              view
            </button>
          </li>
          <li>
            Fullstack{" "}
            <button type="button" className="viewReqBtn">
              view
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
