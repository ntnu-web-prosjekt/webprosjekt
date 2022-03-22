import "./Sidebar/Sidebar.scss";

function Sidebar() {
  return (
    <nav>
      <a href="#">
        <img src={process.env.PUBLIC_URL + "img/logo.svg"} alt="logo" />
      </a>

      <ul class="main-nav">
        <li class="current">
          <a href="#">
            <img
              class="icon"
              src={process.env.PUBLIC_URL + "img/menu-icons/house.svg"}
              alt="icon"
            />
            Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            <img
              class="icon"
              src={process.env.PUBLIC_URL + "img/menu-icons/list.svg"}
              alt="icon"
            />
            Requests <span class="alert">2</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img
              class="icon"
              src={process.env.PUBLIC_URL + "img/menu-icons/cata.svg"}
              alt="icon"
            />
            Catalogue
          </a>
        </li>
        <li>
          <a href="#">
            <img
              class="icon"
              src={process.env.PUBLIC_URL + "img/menu-icons/magnify.svg"}
              alt="icon"
            />
            Find User
          </a>
        </li>
      </ul>

      <ul class="second-nav">
        <li>
          <a href="#">
            <img
              class="icon"
              src={process.env.PUBLIC_URL + "img/menu-icons/user.svg"}
              alt="icon"
            />
            My Profile
          </a>
        </li>
        <li>
          <a href="#">
            <img
              class="icon"
              src={process.env.PUBLIC_URL + "img/menu-icons/end.svg"}
              alt="icon"
            />
            Log Out
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
