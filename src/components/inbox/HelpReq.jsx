import React from "react";

class HelpReq extends React.Component {
  render() {
    return (
      <div>
        <div className="abovetable">
          <h2 className="justify_start">Requesting your help</h2>
        </div>
        <table className="request-table">
          <thead className="request-tablehead">
            <tr>
              <th>Start date</th>
              <th>End date</th>
              <th>Subject</th>
              <th>Requested by</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>22.05.22</td>
              <td>22.06.22</td>
              <td>Advanced CSS</td>
              <td>None yet</td>
              <td>•••</td>
            </tr>
          </tbody>

        </table>
      </div>
    );
  }
}

export default HelpReq;
