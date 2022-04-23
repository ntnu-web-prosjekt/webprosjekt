import "./inbox/inbox.scss";
import HelpReq from "./inbox/HelpReq";
import OfferReq from "./inbox/OfferReq";
import Sidebar from "./Sidebar";

function Inbox() {
  return (
    <div className="flexrow">
      <Sidebar />
      <div className="requests">
        <HelpReq />
        <OfferReq />
      </div>
    </div>
  );
}

export default Inbox;
