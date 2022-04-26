import React from "react";
import {Link} from "react-router-dom";

const API_HOST = process.env.REACT_APP_API_URL;

class UndertakenReq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        requests: []
    };
  }

  componentDidMount() {
    const REQUESTS_API_URL = `${API_HOST}/check/${JSON.parse(sessionStorage.getItem("token"))._id}`;
    fetch(REQUESTS_API_URL)
        .then(response => response.json())
        .then(data => this.setState({ requests: data }));
  }

  render() {
    return (
      <div >
        <div className="abovetable">
          <h2 className="justify_start">Undertaken requests</h2>
        </div>
        <table className="request-table">
          <thead className="request-tablehead">
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
                    <td><Link to={`/request/${request._id}`}>View</Link></td>
                </tr>
            ))}
        </tbody>
        </table>
      </div>
    );
  }
}

export default UndertakenReq;
