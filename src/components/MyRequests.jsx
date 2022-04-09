import "./Requests/Requests.scss";
import UndertakenReq from "./Requests/UndertakenReq";
import UsersCurrentReq from "./Requests/UsersCurrentReq"
import Sidebar from "./Sidebar";


function MyRequests() {
  return (
    <div className="flexrow">
      <Sidebar />
      <div className="requests">
        <UsersCurrentReq />
        <UndertakenReq />
      </div>
    </div>
  );
}

export default MyRequests;