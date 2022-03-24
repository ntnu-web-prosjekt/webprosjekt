import React from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <div class="loginform">
        <img
          src={process.env.PUBLIC_URL + "img/logo.svg"}
          alt="Logo"
          id="logo"
        />
        <form>
          <label>
            <p>E-mail</p>
            <input type="text" name="email" id="email" class="inputField" />
          </label>
          <label>
            <p>Password</p>
            <input
              type="text"
              name="password"
              id="password"
              class="inputField"
            />
          </label>
          <input type="submit" name="login" id="login" value="Sign in" />
        </form>
        <a href="test" id="forgot">
          Forgot password?
        </a>
        <button class="request">Request user account</button>
      </div>
    );
  }
}

export default LoginForm;
