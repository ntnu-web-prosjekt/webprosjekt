import React from "react";

class UndertakenReq extends React.Component {
  render() {
    return (
      <div className="requests">
        <div className="abovetable">
          <h2 className="justify_start">Undertaken requests</h2>
        </div>
        <table className="table">
          <tr className="tablehead">
            <th>Start date</th>
            <th>End date</th>
            <th>Subject</th>
            <th>Second examiner</th>
            <th></th>
          </tr>
          <tr>
            <td>22.05.22</td>
            <td>22.06.22</td>
            <td>Advanced CSS</td>
            <td>None yet</td>
            <td>•••</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default UndertakenReq;
