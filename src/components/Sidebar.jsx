import { NavLink } from "react-router-dom";
import "./Sidebar/Sidebar.scss";
import React, { Component } from "react";

function logOut() {
  sessionStorage.clear();
  window.location.reload(false);
}

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: false,
      active: -1,
    };

    this.checkForNotifications = this.checkForNotifications.bind(this);
  }

  componentDidMount() {
    this.checkForNotifications();
  }

  // Retrieves the open and matched requests from back-end and updates the state
  checkForNotifications() {
    const url = `${process.env.REACT_APP_API_URL}/dashboard/view/${
      JSON.parse(sessionStorage.getItem("token"))._id
    }`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          notifications: data.waitingForReply,
        });
      });
  }

  render() {
    return (
      <nav>
        <NavLink to={"/"}>
          <img
            src={process.env.REACT_APP_BASE_URL + "img/logo.svg"}
            alt="logo"
          />
          {console.log(process.env.REACT_APP_BASE_URL)}
        </NavLink>

        <ul className="main-nav">
          <NavLink
            to={"/"}
            className={this.props.active === 0 ? "active" : null}
          >
            <li>
              <img
                className="icon"
                src={
                  process.env.REACT_APP_BASE_URL + "img/menu-icons/house.svg"
                }
                alt="icon"
              />
              Dashboard
            </li>
          </NavLink>

          <NavLink
            to={"/myRequests"}
            className={this.props.active === 1 ? "active" : null}
          >
            <li>
              <img
                className="icon"
                src={process.env.REACT_APP_BASE_URL + "img/menu-icons/list.svg"}
                alt="icon"
              />
              My Requests{" "}
              {this.state.notifications !== false ? (
                <span className="alert">!!</span>
              ) : (
                false
              )}
            </li>
          </NavLink>

          <NavLink
            to={"/catalogue"}
            className={this.props.active === 2 ? "active" : null}
          >
            <li>
              <img
                className="icon"
                src={process.env.REACT_APP_BASE_URL + "img/menu-icons/cata.svg"}
                alt="icon"
              />
              Catalogue
            </li>
          </NavLink>

          <NavLink
            to={"/findUser"}
            className={this.props.active === 3 ? "active" : null}
          >
            <li>
              <img
                className="icon"
                src={
                  process.env.REACT_APP_BASE_URL + "img/menu-icons/magnify.svg"
                }
                alt="icon"
              />
              Find User
            </li>
          </NavLink>
        </ul>

        <ul className="second-nav">
          <NavLink
            to={"/profile"}
            className={this.props.active === 4 ? "active" : null}
          >
            <li>
              <img
                className="icon"
                src={process.env.REACT_APP_BASE_URL + "img/menu-icons/user.svg"}
                alt="icon"
              />
              My Profile
            </li>
          </NavLink>

          <NavLink
            to={"/settings"}
            className={this.props.active === 5 ? "active" : null}
          >
            <li>
              <img
                className="icon"
                src={process.env.REACT_APP_BASE_URL + "img/menu-icons/gear.svg"}
                alt="icon"
              />
              Settings
            </li>
          </NavLink>

          <NavLink to="/login" onClick={logOut}>
            <li>
              <img
                className="icon"
                src={process.env.REACT_APP_BASE_URL + "img/menu-icons/end.svg"}
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
