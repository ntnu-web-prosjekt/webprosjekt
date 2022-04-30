import "./registration/registration.scss";
import RequestForm from "./NewRequest/RequestForm";
import Sidebar from "./Sidebar";

function CreateRequest() {
  return (
    <div className="page">
      <Sidebar />
      <div className="pageContent" style={{padding: 100}}>
        <RequestForm />
      </div>
    </div>
  );
}

export default CreateRequest;
