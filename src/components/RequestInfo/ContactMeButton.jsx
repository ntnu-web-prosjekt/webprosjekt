import "./button.scss";

function ContactMeButton() {
    
    // Opens up users default e-mail program
    function startMail() {
        const email = "name@domain.com"

        window.location.href = `mailto:${email}`;
    }

    return (
        <button className="req-button" onClick={startMail}>
            Contact me
        </button>
    );
}

export default ContactMeButton;