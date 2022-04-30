import Sidebar from "./Sidebar";
import "../components/findUser/findUser.scss";
import UserEntry from "../components/findUser/UserEntry";

import React, { Component } from "react";

export default class FindUser extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  async componentDidMount() {
    await fetch("https://exammatcher-server.herokuapp.com/finduser/view")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data });
      });
  }
  render() {
    return (



      <div className="page">
        <Sidebar />
        <div className="pageContent dashboard">
          <h1>Find Users</h1>
          <div className="requests" id="usersTable">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>University</th>
                  <th>Degree</th>
                  <th>Tags</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.length > 0
                  ? this.state.users.map((user) => (
                    <UserEntry
                      key={user._id}
                      className="userEntry"
                      id={user._id}
                      name={user.name.firstName + " " + user.name.lastName}
                      university={user.university}
                      degree={user.degree}
                      tags={user.tags.join(', ')}
                    />
                  ))
                  : console.log("loading users...")}
              </tbody>
            </table>
          </div>
          </div>
        </div>
    );
  }
}
