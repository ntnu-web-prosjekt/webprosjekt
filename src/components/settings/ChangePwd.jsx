import React, { Component } from "react";

export default class ChangePwd extends Component {
  render() {
    return (
      <div className="Change-pwd">
        <form>
          <h3>Change Password</h3>
          <label>Change Password</label>
          <br />
          <input type="password" name="old-password" />
          <br />
          <label>New Password</label>
          <br />
          <input type="password" name="new-password" />
          <br />
          <label>Confirm Password</label>
          <br />
          <input type="password" name="confirm-password" />
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
