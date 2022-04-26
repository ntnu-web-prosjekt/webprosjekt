import { NavLink } from "react-router-dom";
import "./Sidebar/Sidebar.scss";
import React, { Component } from "react";

function logOut() {
  sessionStorage.clear();
  window.location.reload(false);
}

export default class Sidebar extends Component {
  constructor(props){
    super(props);

    this.state = {
      notifications: false
    }

    this.checkForNotifications = this.checkForNotifications.bind(this);
  }

  componentDidMount() {
    this.checkForNotifications();
  }

  // Retrieves the open and matched requests from back-end and updates the state
  checkForNotifications() {
    const url = `${process.env.REACT_APP_API_URL}/dashboard/view/${JSON.parse(sessionStorage.getItem("token"))._id}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {       
        this.setState({
          notifications: data.waitingForReply
        });
      });
  }

  render() {
    return (
      <nav>
        <NavLink to={"/"}>
          <img src={process.env.PUBLIC_URL + "img/logo.svg"} alt="logo" />
        </NavLink>

        <ul className="main-nav">
          
            <NavLink to={"/"}>
            <li>
              <img
                className="icon"
                src={process.env.PUBLIC_URL + "img/menu-icons/house.svg"}
                alt="icon"
              />
              Dashboard
              </li>
            </NavLink>
          
          
            <NavLink to={"/myRequests"}>
              <li>
              <img
                className="icon"
                src={process.env.PUBLIC_URL + "img/menu-icons/list.svg"}
                alt="icon"
              />
              Requests {this.state.notifications !== false ? <span className="alert">!!</span> : false} 
              </li>
            </NavLink>
          
          
            <NavLink to={"/catalogue"}>
              <li>
              <img
                className="icon"
                src={process.env.PUBLIC_URL + "img/menu-icons/cata.svg"}
                alt="icon"
              />
              Catalogue
              </li>
            </NavLink>
          
          
            <NavLink to={"/findUser"}>
              <li>
              <img
                className="icon"
                src={process.env.PUBLIC_URL + "img/menu-icons/magnify.svg"}
                alt="icon"
              />
              Find User
              </li>
            </NavLink>
          
        </ul>

        <ul className="second-nav">
          
            <NavLink to={"/profile"}>
              <li>
              <img
                className="icon"
                src={process.env.PUBLIC_URL + "img/menu-icons/user.svg"}
                alt="icon"
              />
              My Profile
              </li>
            </NavLink>
          
          
            <NavLink to="/login" onClick={logOut}>
              <li>
              <img
                className="icon"
                src={process.env.PUBLIC_URL + "img/menu-icons/end.svg"}
                alt="icon"
              />
              Log Out
              </li>
            </NavLink>
          
        </ul>
      </nav>
    );
  }
}