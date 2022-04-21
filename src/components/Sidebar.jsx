import { NavLink } from "react-router-dom";
import "./Sidebar/Sidebar.scss";

function logOut() {
  sessionStorage.clear();
  window.location.reload(false);
}

function Sidebar() {
  return (
    <nav>
      <NavLink to={"/"}>
        <img src={process.env.PUBLIC_URL + "img/logo.svg"} alt="logo" />
      </NavLink>

      <ul className="main-nav">
        <li>
          <NavLink to={"/"}>
            <img
              className="icon"
              src={process.env.PUBLIC_URL + "img/menu-icons/house.svg"}
              alt="icon"
            />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to={"myRequests"}>
            <img
              className="icon"
              src={process.env.PUBLIC_URL + "img/menu-icons/list.svg"}
              alt="icon"
            />
            Requests <span className="alert">2</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/catalogue"}>
            <img
              className="icon"
              src={process.env.PUBLIC_URL + "img/menu-icons/cata.svg"}
              alt="icon"
            />
            Catalogue
          </NavLink>
        </li>
        <li>
          <NavLink to={"/findUser"}>
            <img
              className="icon"
              src={process.env.PUBLIC_URL + "img/menu-icons/magnify.svg"}
              alt="icon"
            />
            Find User
          </NavLink>
        </li>
      </ul>

      <ul className="second-nav">
        <li>
          <NavLink to={"/profile"}>
            <img
              className="icon"
              src={process.env.PUBLIC_URL + "img/menu-icons/user.svg"}
              alt="icon"
            />
            My Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={logOut}>
            <img
              className="icon"
              src={process.env.PUBLIC_URL + "img/menu-icons/end.svg"}
              alt="icon"
            />
            Log Out
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
