import "./profile/profile.scss";
import Tags from "./profile/Tags";
import AboutMe from "./profile/AboutMe";
import MyReview from "./profile/MyReview";
import PendingReq from "./profile/PendingReq";
import ProfileInfo from "./profile/ProfileInfo";
import Sidebar from "./Sidebar";

function App() {
  const userData = JSON.parse(sessionStorage.getItem("token"));
  return (
    <div className="page">
        <Sidebar />
      <div className="pageContent Profile">
        <ProfileInfo {...userData} />
        <div>
        <Tags {...userData} />
        <AboutMe {...userData} />
        </div>
      </div>
    </div>
  );
}

export default App;
