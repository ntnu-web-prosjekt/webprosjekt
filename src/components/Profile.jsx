import "./profile/profile.scss";
import Tags from "./profile/Tags";
import AboutMe from "./profile/AboutMe";
import MyReview from "./profile/MyReview";
import PendingReq from "./profile/PendingReq";
import ProfileInfo from "./profile/ProfileInfo";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="profile-page">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="Profile">
        <ProfileInfo />
        <Tags />
        <AboutMe />
        <PendingReq />
        <MyReview />
      </div>
    </div>
  );
}

export default App;
