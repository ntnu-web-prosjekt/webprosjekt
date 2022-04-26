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
    <div className="profile-page">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="Profile">
        <ProfileInfo {...userData} />
        <Tags {...userData} />
        <AboutMe {...userData} />
        <PendingReq {...userData} />
        <MyReview {...userData} />
      </div>
    </div>
  );
}

export default App;
