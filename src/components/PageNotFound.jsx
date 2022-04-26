import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./pageNotFound/404.scss";

export default class pageNotFound extends Component {
  render() {
    return (
      <div className="pageNotFound">
        <h1>404 - Page not found!</h1>
        <h2>Oops! Looks like you've entered the shadow-realm.</h2>
        <Link className="aButton" to="/">
          Let me help you return home safely
        </Link>
      </div>
    );
  }
}
