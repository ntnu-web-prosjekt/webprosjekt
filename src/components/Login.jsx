import "./login/Login.scss";
import LoginForm from "./login/LoginForm";
import Statistics from "./login/Statistics";

// Start Auth
import PropTypes from "prop-types";
import React, { useState } from "react";

async function loginUser(credentials) {
  console.log("Started login");
  return fetch(process.env.REACT_APP_API_URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
// End Auth

export default function Login({ setToken }) {
  // var passwordHash = require("password-hash");
  // Start Auth
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // var hashedPassword = passwordHash.generate(password);
    var credentials = {
      username: username,
      password: password,
    };
    try{
      const token = await loginUser(credentials);
      setToken(token);
    } catch(e) {
      alert("Incorrect username or password");
    }
  };
  // End Auth

  return (
    <div className="Login">
      <Statistics />
      <LoginForm
        handleSubmit={handleSubmit}
        setUserName={setUserName}
        setPassword={setPassword}
      />
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
