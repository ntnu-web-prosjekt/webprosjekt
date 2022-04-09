import React from "react";

class LoginForm extends React.Component {
<<<<<<< HEAD
    render() {
        return (
            <div class="loginform">
                <img className='login_img' src={exammatcher_logo} alt="Logo" id='logo' />
                <form>
                    <label>
                        <p>E-mail</p>
                        <input type="text" name="email" id="email" class="inputField" />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="text" name="password" id="password" class="inputField"/>
                    </label>
                    <input type="submit" name="login" id="login" value="Sign in" />
                </form>
                <a href='test' id='forgot'>Forgot password?</a>
                <button class="request">Request user account</button>
            </div>
        )
    }
=======
  render() {
    return (
      <div className="loginform">
        <img
          src={process.env.PUBLIC_URL + "img/logo.svg"}
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
              type="text"
              name="password"
              id="password"
              className="inputField"
            />
          </label>
          <input type="submit" name="login" id="login" value="Sign in" />
        </form>
        <a href="test" id="forgot">
          Forgot password?
        </a>
        <button className="request">Request user account</button>
      </div>
    );
  }
>>>>>>> main
}

export default LoginForm;
