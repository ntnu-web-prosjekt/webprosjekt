import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
//import App from "./components/Registration";
//import Login from "./components/Login";
//import MyRequests from "./components/MyRequests";
import Inbox from "./components/Inbox";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Inbox />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();