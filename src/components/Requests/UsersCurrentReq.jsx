import React from 'react';
import {Link} from "react-router-dom";
  

const API_HOST = process.env.REACT_APP_API_URL;
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
                        <Link className='above_button' to={`/create`}>Create request</Link>
                        <Link className='above_button' to={`/inbox`}>Inbox</Link>
                    </div>
                    <table className='request-table'>
                        <thead className='request-tablehead'>
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
                                    <td>{request.subjectName}</td>
                                    <td>None yet...</td>
                                    {/* Passes request id as a prop when trying to view request */}
                                    <td><Link to={`/request/${request._id}`}>View</Link> <Link to={`/edit/${request._id}`}>Edit</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
        )
    }
}

export default UsersCurrentReq;

