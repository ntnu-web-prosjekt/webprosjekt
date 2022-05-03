import ApplyForReqButton from "./ApplyForReqButton";
import ContactMeButton from "./ContactMeButton";

function ButtonContainer(props) {
    return (
        <div className="button-container">
            <ApplyForReqButton id={props.request._id}/>
            <ContactMeButton email={props.request.email}/>
        </div>
    );
}

export default ButtonContainer;