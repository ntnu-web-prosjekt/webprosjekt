import React from "react";
import { Link } from "react-router-dom";

class Statistics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openRequests: null,
      matchedRequests: null,
    };

    this.retrieveStats = this.retrieveStats.bind(this);
  }

  componentDidMount() {
    this.retrieveStats();
  }

  // Retrieves the open and matched requests from back-end and updates the state
  retrieveStats() {
    const url = process.env.REACT_APP_API_URL + "/stats/view";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          openRequests: data.openReq,
          matchedRequests: data.matchedReq,
        });
      });
  }

  render() {
    return (
      <div id="statistics">
        <p className="heading">
          ExamMatcher makes it easy to find a second examiner for your exams!
        </p>
        <div id="statbox-container">
          <div className="statbox">
            <p className="stattype">Open requests</p>
            <p className="statvalue">
              {this.state.openRequests != null ? this.state.openRequests : "X"}
            </p>
          </div>
          <div className="statbox">
            <p className="stattype">Matched requests</p>
            <p className="statvalue">
              {this.state.matchedRequests != null
                ? this.state.matchedRequests
                : "X"}
            </p>
          </div>
        </div>
        <Link to="/about" id="info">
          More info about this project
        </Link>
      </div>
    );
  }
}

export default Statistics;
