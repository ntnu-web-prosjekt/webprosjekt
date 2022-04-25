import "./WelcomeUser.scss";
import { NavLink } from "react-router-dom";

function WelcomeUser(props) {
    return (
            <div className="welcome">
                <div className="welcome__container">
                    <div className="welcome__container__profile">
                        <h2 className="welcome__container__profile__heading">
                            <span className="welcome__container__profile__heading__text--small">Welcome back,</span>
                            <span className="welcome__container__profile__heading__text--big">{props.name !== null ? props.name : "..."}</span>
                        </h2>
                        <img src={process.env.PUBLIC_URL + 'img/profile.png'} alt="Users profile" />
                    </div>
                    <div className="welcome__container__message">
                    {props.waitingForReply !== false ?
                        <NavLink to="/inbox">
                        <span className="welcome__container__message__text"> You have request(s) waiting for reply &nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                        </span></NavLink> : false}
                    </div>
                </div>
            </div>
);
}

export default WelcomeUser;