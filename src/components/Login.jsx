import "./login/Login.scss";
import LoginForm from "./login/LoginForm";
import Statistics from "./login/Statistics";

// Start Auth
import PropTypes from "prop-types";
import React, { useState } from "react";

async function loginUser(credentials) {
  return fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
// End Auth

export default function Login({ setToken }) {
  const bcrypt = require("bcryptjs");
  const crypto = require("crypto");
  // Start Auth
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSalt(6)); // hash created previously created upon sign up

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      hashedPassword,
    });
    setToken(token);
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
