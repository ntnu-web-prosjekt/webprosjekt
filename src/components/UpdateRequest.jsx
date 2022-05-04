import "./registration/registration.scss";
import UpdateRequestForm from "./UpdateRequest/UpdateRequest";
import Sidebar from "./Sidebar";

function UpdateRequest() {
  return (
    <div className="page">
      <Sidebar />
      <div className="pageContent" style={{padding: 100}}>
        <UpdateRequestForm />
      </div>
    </div>
  );
}

export default UpdateRequest;
