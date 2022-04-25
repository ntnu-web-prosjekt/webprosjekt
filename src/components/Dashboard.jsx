import React, { Component } from "react";
import PendingReq from "./dashboard/PendingReq";
import UpcomingReq from "./dashboard/UpcomingReq";
import WelcomeUser from "./dashboard/WelcomeUser";
import Sidebar from "./Sidebar";
import "./dashboard/dashboard.scss";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      waitingForReply: null,
      pendingRequests: null,
      upcomingRequests: null
    };

    this.retrieveDashboardData = this.retrieveDashboardData.bind(this);
  }

  componentDidMount() {
    this.retrieveDashboardData();
  }

  // Retrieves the open and matched requests from back-end and updates the state
  retrieveDashboardData() {
    const url = `http://localhost:5005/dashboard/view/${JSON.parse(sessionStorage.getItem("token"))._id}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {       
        this.setState({
          username: data.userInfo.name.firstName + " " + data.userInfo.name.lastName,
          waitingForReply: data.waitingForReply,
          pendingRequests: data.ownJobs,
          upcomingRequests: data.activeJobs
        });
        
      });
  }

  render() {
    return (
      <div className="page">
        <Sidebar />
        <div className="pageContent dashboard">
          <WelcomeUser name={this.state.username} waitingForReply={this.state.waitingForReply}/>
          <div className="requests">
            <PendingReq data={this.state.pendingRequests}/>
            <UpcomingReq data={this.state.upcomingRequests}/>
          </div>
        </div>
      </div>
    );
  }
}
