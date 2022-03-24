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

            <div class="request-info">
                <div class="general">
                    <GeneralInfo/>
                </div>

                <div class="profile">
                    <RequsterProfile/>
                </div>

                <div class="buttons">
                    <ButtonContainer/>
                </div>

                <div class="key-info">
                    <KeyInfo/>
                </div>
            </div>
        </div>
    );
}

export default RequestInfo;