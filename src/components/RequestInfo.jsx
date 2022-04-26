import RequsterProfile from "./RequestInfo/RequsterProfile";
import KeyInfo from "./RequestInfo/KeyInfo";
import GeneralInfo from "./RequestInfo/GeneralInfo";
import ButtonContainer from "./RequestInfo/ButtonContainer";
import "./RequestInfo/requestinfo.scss";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RequestInfo() {
  const params = useParams();
  //const [requestID] = useState(request._id)
  //console.log(requestID)

  const [request, setRequest] = useState({});
  useEffect(() => {
    const API_HOST = process.env.REACT_APP_API_URL;
    const req = `${API_HOST}/requests/${params._id}`;
    const fetchRequest = async () => {
      try {
        const response = await fetch(req);
        const data = await response.json();
        console.log(data);
        setRequest(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRequest();
  }, [params._id]);
  return (
    <div className="page request-info-container">
      <Sidebar />

      <div className="request-info">
        <div className="general">
          <GeneralInfo request={request} />
        </div>

        <div className="profile">
          <RequsterProfile />
        </div>

        <div className="buttons">
          <ButtonContainer />
        </div>

        <div className="key-info">
          <KeyInfo request={request} />
        </div>
      </div>
    </div>
  );
}

export default RequestInfo;
