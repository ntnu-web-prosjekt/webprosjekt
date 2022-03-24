import React, { Component } from "react";
import PendingReq from "./dashboard/PendingReq";
import UpcomingReq from "./dashboard/UpcomingReq";
import WelcomeUser from "./dashboard/WelcomeUser";
import Sidebar from "./Sidebar";
import "./dashboard/dashboard.scss";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="page">
        <Sidebar />
        <div className="pageContent dashboard">
          <WelcomeUser />
          <div className="requests">
            <PendingReq />
            <UpcomingReq />
          </div>
        </div>
      </div>
    );
  }
}
