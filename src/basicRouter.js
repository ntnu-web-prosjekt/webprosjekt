import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Catalogue from "./components/Catalogue";
import Dashboard from "./components/Dashboard";
import FindUser from "./components/FindUser";
import Login from "./components/Login";
import Inbox from "./components/Inbox";
import Profile from "./components/Profile";
import Registration from "./components/Registration";
import Settings from "./components/Settings";
import MyRequests from "./components/MyRequests";
import UserProfile from "./components/Profile";
import RequestInfo from "./components/RequestInfo";
import About from "./components/About";
import useToken from "./components/token/useToken";

export default function BasicRouting() {
  // Start Auth
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  // End Auth

  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/myRequests">My Requests</NavLink>
          </li> 
          <li>
            <NavLink to="/inbox">Inbox</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
          <li>
            <NavLink to="/UserProfile">UserProfile</NavLink>
          </li>
          <li>
            <NavLink to="/findUser">Find User</NavLink>
          </li>
          <li>
            <NavLink to="/registration">Registrations</NavLink>
          </li>
          <li>
            <NavLink to="/catalogue">catalogue</NavLink>
          </li>
          <li>
            <NavLink to="/requestInfo">requestInfo</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>

          <Route
            exact
            path="/login"
            element={<Login setToken={setToken} />}
          ></Route>

          <Route exact path="/myRequests" element={<MyRequests />}></Route>

          <Route exact path ="/request/:_id" element={<RequestInfo />}></Route>

          <Route exact path="/inbox" element={<Inbox />}></Route>

          <Route exact path="/profile" element={<Profile />}></Route>

          <Route exact path="/settings" element={<Settings />}></Route>

          <Route exact path="/userProfile" element={<UserProfile />}></Route>

          <Route exact path="/findUser" element={<FindUser />}></Route>

          <Route exact path="/registration" element={<Registration />}></Route>

          <Route exact path="/catalogue" element={<Catalogue />}></Route>

          <Route exact path="/requestInfo" element={<RequestInfo />}></Route>

          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
