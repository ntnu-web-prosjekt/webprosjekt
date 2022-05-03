import React from 'react';
import {Link} from "react-router-dom";
import RespondOffer from './RespondOffer';

class OfferReq extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inboxData: []
        };
    }
    componentDidMount() {
        const url = `${process.env.REACT_APP_API_URL}/inbox/view/${JSON.parse(sessionStorage.getItem("token"))._id}`;
        console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ inboxData: data });
            });
    }
    render() {
        console.log(this.state.inboxData)
        return (
                <div>
                    <div className='abovetable'>
                        <h2 className='justify_start'>Offering you help</h2>
                    </div>
                    <table className='table'>
                        <thead className='tablehead'>
                            <tr>
                                <th>Start date</th>
                                <th>End date</th>
                                <th>Subject</th>
                                <th>Offered by</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* goes through  each request you own that people are offering to help */}
                            {this.state.inboxData.map((item,index) => 
                                    { return(
                                        // for each person offering to help, displays a row with the request info
                                        item.examinatorId.map((i, subindex) => {
                                            return (
                                                <tr key={subindex}>
                                                    <td>{item.startDate}</td>
                                                    <td>{item.endDate}</td>
                                                    <td>{item.subjectName}</td>
                                                    <td>{i.split("::")[1]}</td>
                                                    <td><RespondOffer offerId={item._id} offerExaminatorId={i.split("::")[0]} /></td>
                                                </tr>
                                            )                                        
                                        })
                                    )}
                            )}
                        </tbody>
                    </table>
                </div>
        )
    }
}

export default OfferReq;

