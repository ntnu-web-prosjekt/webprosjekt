import React from "react";
import { Navigate } from "react-router-dom";

class RespondOffer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh: false
        };
    }
    handleAccept = () => {
        const API_HOST = process.env.REACT_APP_API_URL;
        const url = `${API_HOST}/inbox/accept/offer`;
        const request = {
            requestId: this.props.offerId,
            examinatorId: this.props.offerExaminatorId
        };
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            }
        );
        this.setState({redirect: true});
    };

    handleDecline = () => {
        console.log("declined");
    };

    render() {
        const refresh = this.state.refresh;
        if (refresh) {
            return <Navigate to="/myRequests" />;
        }
        return (
            <div>
                <button onClick={this.handleAccept}>Accept</button>
                <button onClick={this.handleDecline}>Decline</button>
            </div>
        );
    }
}

export default RespondOffer;