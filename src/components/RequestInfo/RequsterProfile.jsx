import { Link } from "react-router-dom";
import "./requesterprofile.scss";

function RequesterProfile() {
  return (
    <div class="requester">
      <div class="requester__container">
        <div class="requester__container__profile">
          <h2 class="requester__container__profile__heading">
            <span class="requester__container__profile__heading__text--small">
              Requested by
            </span>
            <span class="requester__container__profile__heading__text--big">
              Jane Appleseed
            </span>
            <span class="requester__container__profile__heading__link">
              <Link to="#">Visit profile</Link>
            </span>
          </h2>
          <img
            src={process.env.PUBLIC_URL + "img/profile2.png"}
            alt="Users profile"
          />
        </div>
      </div>
    </div>
  );
}

export default RequesterProfile;
