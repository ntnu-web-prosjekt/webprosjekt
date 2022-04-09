import "./inbox/inbox.scss";
import HelpReq from "./inbox/HelpReq";
import OfferReq from "./inbox/OfferReq";
import Sidebar from "./Sidebar";

function Inbox() {
  return (
    <div className="Login">
      <Sidebar />
      <HelpReq />
      <OfferReq />
    </div>
  );
}

export default Inbox;
