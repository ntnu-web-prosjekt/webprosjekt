import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
          <Route
            exact
            path="/"
            element={!token ? <Navigate to="/login" /> : <Dashboard />}
          ></Route>

          <Route
            exact
            path="/login"
            element={
              token ? <Navigate to="/" /> : <Login setToken={setToken} />
            }
          ></Route>

          <Route
            exact
            path="/myRequests"
            element={!token ? <Navigate to="/login" /> : <MyRequests />}
          ></Route>

          <Route
            exact
            path="/inbox"
            element={!token ? <Navigate to="/" /> : <Inbox />}
          ></Route>

          <Route
            exact
            path="/profile"
            element={!token ? <Navigate to="/" /> : <Profile />}
          ></Route>

          <Route
            exact
            path="/settings"
            element={!token ? <Navigate to="/" /> : <Settings />}
          ></Route>

          <Route
            exact
            path="/userProfile"
            element={!token ? <Navigate to="/" /> : <UserProfile />}
          ></Route>

          <Route
            exact
            path="/findUser"
            element={!token ? <Navigate to="/" /> : <FindUser />}
          ></Route>

          <Route
            exact
            path="/registration"
            element={token ? <Navigate to="/" /> : <Registration />}
          ></Route>

          <Route
            exact
            path="/catalogue"
            element={!token ? <Navigate to="/" /> : <Catalogue />}
          ></Route>

          <Route
            exact
            path="/requestInfo"
            element={!token ? <Navigate to="/" /> : <RequestInfo />}
          ></Route>

          <Route
            exact
            path="/about"
            element={!token ? <Navigate to="/" /> : <About />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}
