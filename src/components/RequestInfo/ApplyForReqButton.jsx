import "./button.scss";

function ApplyForReqButton(props) {

    const body = {
        requestId: `${props.id}`,
        examinatorId: JSON.parse(sessionStorage.getItem("token"))._id
    }

    const applyRequest = () => {
        fetch(process.env.REACT_APP_API_URL + "/requests/apply", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => alert(data.msg));
    };

    return (
        <button onClick={applyRequest} className="req-button">
            Apply for request
        </button>
    );
}

export default ApplyForReqButton;