import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
import RequestForm from "./components/NewRequest/RequestForm";
import UpdateRequest from "./components/UpdateRequest";
import ViewProfile from "./components/ViewProfile";
import PageNotFound from "./components/PageNotFound";
import CreateRequest from "./components/CreateRequest";

export default function BasicRouting() {
  // Start Auth
  const { token, setToken } = useToken();

  return (
    <Router>
      <div>
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
            path="/users/:id"
            element={!token ? <Navigate to="/" /> : <ViewProfile />}
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
            path="/request/:_id"
            element={!token ? <Navigate to="/" /> : <RequestInfo />}
          ></Route>

          <Route
            exact
            path="/create"
            element={!token ? <Navigate to="/" /> : <CreateRequest />}
          ></Route>

          <Route
            exact
            path="/edit/:_id"
            element={!token ? <Navigate to="/" /> : <UpdateRequest />}
          ></Route>

          <Route exact path="/about" element={<About />}></Route>

          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
