import "./Requests/Requests.scss";
import UndertakenReq from "./Requests/UndertakenReq";
import UsersCurrentReq from "./Requests/UsersCurrentReq";

function MyRequests() {
  return (
    <div className="Login">
      <UsersCurrentReq />
      <UndertakenReq />
    </div>
  );
}

export default MyRequests;
