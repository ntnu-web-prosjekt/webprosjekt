import "./button.scss";

function ContactMeButton(props) {
    
    // Opens up users default e-mail program
    function startMail() {
        const email = `${props.email}`

        window.location.href = `mailto:${email}`;
    }

    return (
        <button className="req-button" onClick={startMail}>
            Contact me
        </button>
    );
}

export default ContactMeButton;