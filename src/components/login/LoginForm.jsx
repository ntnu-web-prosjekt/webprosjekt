import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  render() {
    return (
      <div className="loginform">
        <img
          src={process.env.REACT_APP_BASE_URL + "img/logo.svg"}
          alt="Logo"
          id="logo"
        />
        <form onSubmit={this.props.handleSubmit}>
          <label>
            <p>E-mail</p>
            <input
              onChange={(e) => this.props.setUserName(e.target.value)}
              type="text"
              name="email"
              id="email"
              className="inputField"
            />
          </label>
          <label>
            <p>Password</p>
            <input
              onChange={(e) => this.props.setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              className="inputField"
            />
          </label>
          <input type="submit" name="login" id="login" value="Sign in" />
        </form>
        <Link to="/registration" className="aButton">
          Request user account
        </Link>
      </div>
    );
  }
}

export default LoginForm;
