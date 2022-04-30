import React from "react";
import { Link } from "react-router-dom";

const API_HOST = process.env.REACT_APP_API_URL;

class UndertakenReq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [],
    };
  }

  componentDidMount() {
    const REQUESTS_API_URL = `${API_HOST}/requests/check/${
      JSON.parse(sessionStorage.getItem("token"))._id
    }`;
    fetch(REQUESTS_API_URL)
      .then((response) => response.json())
      .then((data) => this.setState({ requests: data }));
  }

  render() {
    return (
      <div>
        <div className="abovetable">
          <h2 className="justify_start">Accepted requests</h2>
        </div>
        <table className="request-table">
          <thead className="request-tablehead">
            <tr>
              <th>Exam Date</th>
              <th>Grading Deadline</th>
              <th>Subject</th>
              <th>Second examiner</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.requests.map((request) => (
              <tr key={request._id}>
                <td>{request.startDate.split("T")[0].split("-")[2] + "." + request.startDate.split("T")[0].split("-")[1] + "." + request.startDate.split("T")[0].split("-")[0]}</td>
                <td>{request.endDate.split("T")[0].split("-")[2] + "." + request.endDate.split("T")[0].split("-")[1] + "." + request.endDate.split("T")[0].split("-")[0]}</td>
                <td>{request.subjectName}</td>
                <td>None yet...</td>
                {/* Passes request id as a prop when trying to view request */}
                <td>
                  <Link to={`/request/${request._id}`}>View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UndertakenReq;
