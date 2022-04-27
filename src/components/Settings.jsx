import "./settings/settings.scss";
import PersonalDetails from "./settings/PersonalDetails";
import ProfileImage from "./settings/ProfileImage";
import ChangePwd from "./settings/ChangePwd";
import Sidebar from "./Sidebar";
import Tags from "./profile/Tags";

function App() {
  const userData = JSON.parse(sessionStorage.getItem("token"));
  return (
    <div className="page">
      <Sidebar />
      <div className="pageContent dashboard Settings">
        <h1>My Profile &gt; Settings</h1>
        <ProfileImage />
        <PersonalDetails />
        <ChangePwd />
        <Tags {...userData} />
      </div>
    </div>
  );
}

export default App;
