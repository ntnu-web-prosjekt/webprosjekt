import Sidebar from "./Sidebar";
import "../components/findUser/findUser.scss";
import UserEntry from "../components/findUser/UserEntry";
import "./findUser/findUser.scss";

import React, { Component } from "react";

export default class FindUser extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };

    this.inputRef = React.createRef();
    this.updateUsersFromSearch = this.updateUsersFromSearch.bind(this);
  }
  async componentDidMount() {
    await fetch("https://exammatcher-server.herokuapp.com/finduser/view")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data });
      });
  }

  updateUsersFromSearch() {
    const user = this.inputRef.current.value;
    let firstname = user.split(" ")[0];
    let lastname = user.split(" ")[1];

    if(firstname == "" || firstname == undefined){
      firstname = "-"
    }

    if(lastname == "" || lastname == undefined){
      lastname = "-"
    }

    fetch(`${process.env.REACT_APP_API_URL}/finduser/search/${firstname}/${lastname}`)
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
            <input className='search_input' ref={this.inputRef} type="text" defaultValue="" placeholder="Search for name..."/>
            <button className='search_button' onClick={this.updateUsersFromSearch}>Search</button>
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
                      tags={user.tags.length > 3 ? user.tags.slice(0, 3).join(', ') + " (...)" : user.tags.join(', ')}
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
