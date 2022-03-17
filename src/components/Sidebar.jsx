import "./Sidebar.scss";

function Sidebar() {
    return ( 
        <nav>
            <a href="#"><img src={process.env.PUBLIC_URL + 'img/logo.svg'} alt="logo" /></a>

            <ul class="main-nav">
                <li class="current"><a href="#"><img class="icon" src={process.env.PUBLIC_URL + 'img/menu-icons/house.svg'} />Dashboard</a></li>
                <li><a href="#"><img class="icon" src={process.env.PUBLIC_URL + 'img/menu-icons/list.svg'} />Requests <span class="alert">2</span></a></li>
                <li><a href="#"><img class="icon" src={process.env.PUBLIC_URL + 'img/menu-icons/cata.svg'} />Catalogue</a></li>
                <li><a href="#"><img class="icon" src={process.env.PUBLIC_URL + 'img/menu-icons/magnify.svg'} />Find User</a></li>
            </ul>

            <ul class="second-nav">
                <li><a href="#"><img class="icon" src={process.env.PUBLIC_URL + 'img/menu-icons/user.svg'} />My Profile</a></li>
                <li><a href="#"><img class="icon" src={process.env.PUBLIC_URL + 'img/menu-icons/end.svg'} />Log Out</a></li>
            </ul>
        </nav>
    );
}

export default Sidebar;