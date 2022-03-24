import "./settings/settings.scss";
import PersonalDetails from "./settings/PersonalDetails";
import ProfileImage from "./settings/ProfileImage";
import ChangePwd from "./settings/ChangePwd";

function App() {
  return (
    <div className="Settings">
      <h1>My Profile &gt; Settings</h1>
      <div className="Sidebar"></div>
      <ProfileImage />
      <PersonalDetails />
      <ChangePwd />
    </div>
  );
}

export default App;
