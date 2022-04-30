import React, { Component } from "react";
import CatalogueEntry from "./catalogueEntry";
import catalogueData from "./catalogueData";

export default class Requests extends Component {
  constructor() {
    super();
    this.state = { entries: [] };
  }
  async componentDidMount() {
    var array = await catalogueData();
    this.setState({ entries: array });
  }

  render() {
    return (
      <div className="catalogueRequests">
        <table>
          <thead>
            <tr>
              <th>Exam Date</th>
              <th>Grading Deadline</th>
              <th>Subject</th>
              <th>Tags</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.entries.length > 0
              ? this.state.entries.map((obj) => {
                  return <CatalogueEntry data={obj} key={obj._id} />;
                })
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}
