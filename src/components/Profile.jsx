import "./profile/profile.scss";
import Tags from "./profile/Tags";
import AboutMe from "./profile/AboutMe";
import MyReview from "./profile/MyReview";
import PendingReq from "./profile/PendingReq";
import ProfileInfo from "./profile/ProfileInfo";

function App() {
  return (
    <div className="Profile">
      <ProfileInfo />
      <Tags />
      <AboutMe />
      <PendingReq />
      <MyReview />
    </div>
  );
}

export default App;
