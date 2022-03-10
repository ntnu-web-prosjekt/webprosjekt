import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Catalogue from "./components/Catalogue";
import Dashboard from "./components/Dashboard";
import FindUser from "./components/FindUser";
import Login from "./components/Login";
import Inbox from "./components/Inbox";
import Profile from "./components/Profile";
import Registration from "./components/Registration";
import Settings from "./components/Settings";
import Sidebar from "./components/Sidebar";
import MyRequsts from "./components/MyRequsts";

export default function basicRouting() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/myRequests">My Requests</Link>
          </li>
          <li>
            <Link to="/inbox">Inbox</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/UserProfile">UserProfile</Link>
          </li>
          <li>
            <Link to="/findUser">Find User</Link>
          </li>
          <li>
            <Link to="/registration">Registrations</Link>
          </li>
          <li>
            <Link to="/sidebar">Sidebar</Link>
          </li>
          <li>
            <Link to="/catalogue">catalogue</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>

          <Route exact path="/login" element={<Login />}></Route>

          <Route exact path="/myRequsts" element={<MyRequsts />}></Route>

          <Route exact path="/inbox" element={<Inbox />}></Route>

          <Route exact path="/profile" element={<Profile />}></Route>

          <Route exact path="/settings" element={<Settings />}></Route>

          <Route exact path="/userProfile" element={<UserProfile />}></Route>

          <Route exact path="/findUser" element={<FindUser />}></Route>

          <Route exact path="/registration" element={<Registration />}></Route>

          <Route exact path="/sidebar" element={<Sidebar />}></Route>

          <Route exact path="/catalogue" element={<Catalogue />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
