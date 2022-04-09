import React from 'react';
import {Link} from "react-router-dom";
  

const API_HOST = "http://localhost:5000";
const REQUESTS_API_URL = `${API_HOST}/requests`;


class UsersCurrentReq extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requests: []
        };
    }
    
    componentDidMount() {
        fetch(REQUESTS_API_URL)
            .then(response => response.json())
            .then(data => this.setState({ requests: data }));
    }

    render() {
        return (
                <div >
                    <div className='abovetable'>
                        <h2 className='justify_start'>Own requests</h2>
                        <button className='above_button'>New request</button>
                        <button className='above_button'>Inbox</button>
                    </div>
                    <table className='table'>
                        <thead className='tablehead'>
                        <tr>
                            <th>Start date</th>
                            <th>End date</th>
                            <th>Subject</th>
                            <th>Second examiner</th>
                            <th></th>
                        </tr>
                        </thead>

                        <tbody>
                            {this.state.requests.map(request => (
                                <tr key={request._id}>
                                    <td>{request.startDate}</td>
                                    <td>{request.endDate}</td>
                                    <td>{request.name}</td>
                                    <td>None yet...</td>
                                    {/* Passes request id as a prop when trying to view request */}
                                    <td><Link to={`/request/${request._id}`}>View</Link> <a href="">Edit</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
        )
    }
}

export default UsersCurrentReq;

