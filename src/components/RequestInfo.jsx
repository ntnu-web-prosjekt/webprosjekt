import RequsterProfile from "./RequestInfo/RequsterProfile";
import KeyInfo from "./RequestInfo/KeyInfo";
import GeneralInfo from "./RequestInfo/GeneralInfo";
import ButtonContainer from "./RequestInfo/ButtonContainer";
import "./requestinfo.scss";
import Sidebar from "./Sidebar";

function RequestInfo() {
    return (
        <div className="request-info-container">
            <Sidebar/>

            <div className="request-info">
                <div className="general">
                    <GeneralInfo/>
                </div>

                <div className="profile">
                    <RequsterProfile/>
                </div>

                <div className="buttons">
                    <ButtonContainer/>
                </div>

                <div className="key-info">
                    <KeyInfo/>
                </div>
            </div>
        </div>
    );
}

export default RequestInfo;