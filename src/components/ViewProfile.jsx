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
      userId: JSON.parse(sessionStorage.getItem("token"))._id,
      notes: null,
      loadingNote: true,
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

    await fetch(
      `${process.env.REACT_APP_API_URL}/finduser/review/${
        JSON.parse(sessionStorage.getItem("token"))._id
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        const user = this.state.id;

        if (data.notes[user]) {
          const note = data.notes[user];
          this.setState({ notes: note, loadingNote: false });
        } else {
          this.setState({ loadingNote: false });
        }
      });
  }

  updateReview = (newText) => {
    this.setState({ notes: newText }, () => {
      const body = {
        userId: this.state.id,
        ownerId: JSON.parse(sessionStorage.getItem("token"))._id,
        reviewText: this.state.notes,
      };

      console.log(body);

      fetch(`${process.env.REACT_APP_API_URL}/finduser/review/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("The review is now saved");
        });
    });
  };

  render() {
    if (this.state.user.name && this.state.loadingNote === false) {
      return (
        <div className="page">
          <Sidebar />
          <div className="pageContent Profile">
            <ProfileInfo {...this.state.user} />
            <div>
              <Tags {...this.state.user} />
              <AboutMe {...this.state.user} />
              <PendingReq {...this.state.user} />
              {this.state.id !== this.state.userId && (
                <MyReview
                  {...this.state.user}
                  note={this.state.notes}
                  onClick={this.updateReview}
                />
              )}
            </div>
          </div>
        </div>
      );
    } else {
      return <div>loading...</div>;
    }
  }
}
