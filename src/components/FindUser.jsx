import Sidebar from "./Sidebar";
import "../components/Requests/Requests.scss";
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
    await fetch(
      "https://gist.githubusercontent.com/saltukalakus/124bba04327d8e5eab605d4fb66c53b8/raw/1043e2e62df1bb6118f0d8d1b81881fa45b46cbd/sample_users_with_id.json"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data });
        console.log(this.state.users);
      });
  }
  render() {
    return (
      <div className="findUser-page">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="FindUser">
          <h1>Find Users</h1>
          <div className="requests">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>University</th>
                  <th>Degree</th>
                  <th>Fullfilled requests</th>
                  <th>Tags</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.length > 0
                  ? this.state.users.map((user) => (
                      <UserEntry
                        className="userEntry"
                        name={user.name}
                        university={user.University}
                        degree={user.Degree}
                        tags={user.Tags}
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
