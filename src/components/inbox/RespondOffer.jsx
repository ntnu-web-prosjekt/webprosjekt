import React from "react";

class RespondOffer extends React.Component {
    handleAccept = () => {
        console.log("accepted", this.props.offerId);
    };

    handleDecline = () => {
        console.log("declined");
    };

    render() {
        return (
            <div>
                <button onClick={this.handleAccept}>Accept</button>
                <button onClick={this.handleDecline}>Decline</button>
            </div>
        );
    }
}

export default RespondOffer;