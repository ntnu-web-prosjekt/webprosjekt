import "./profile/profile.scss";
import Tags from "./profile/Tags";
import AboutMe from "./profile/AboutMe";
import MyReview from "./profile/MyReview";
import PendingReq from "./profile/PendingReq";
import ProfileInfo from "./profile/ProfileInfo";
import Sidebar from "./Sidebar";

import React, { Component } from "react";
export default class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      id: window.location.pathname.split("/")[2],
    };
  }

  async componentDidMount() {
    await fetch(
      `https://exammatcher-server.herokuapp.com/finduser/view/${this.state.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ user: data.userInfo });
        console.log(this.state.user);
      });
  }
  render() {
    if (this.state.user.name) {
      return (
        <div className="page">
            <Sidebar />
          <div className="pageContent Profile">
            <ProfileInfo {...this.state.user} />
            <div>
            <Tags {...this.state.user} />
            <AboutMe {...this.state.user} />
            <PendingReq {...this.state.user} />
            <MyReview {...this.state.user} />
            </div>
          </div>
        </div>
      );
    } else {
      return <div>loading...</div>;
    }
  }
}
