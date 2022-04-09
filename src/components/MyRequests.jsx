import "./Requests/Requests.scss";
import UndertakenReq from "./Requests/UndertakenReq";
<<<<<<< HEAD
import UsersCurrentReq from "./Requests/UsersCurrentReq"
import Sidebar from "./Sidebar";

=======
import UsersCurrentReq from "./Requests/UsersCurrentReq";
>>>>>>> main

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
