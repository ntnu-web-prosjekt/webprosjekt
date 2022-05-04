import React, { Component } from "react";
import CatalogueEntry from "./catalogueEntry";
import catalogueData from "./catalogueData";

export default class Requests extends Component {
  constructor() {
    super();
    this.state = { entries: [] };

    this.inputRef = React.createRef();
    this.updateRequestsFromSearch = this.updateRequestsFromSearch.bind(this);
  }
  async componentDidMount() {
    var array = await catalogueData();
    this.setState({ entries: array });
  }

  updateRequestsFromSearch() {
    let subjectname = this.inputRef.current.value;
  
    if(subjectname == "" || subjectname == undefined){
      subjectname = "-"
    }

    fetch(`${process.env.REACT_APP_API_URL}/requests/search/${subjectname}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ entries: data });
      });
  }

  render() {
    return (
      <div className="catalogueRequests">
        <h1>Catalogue</h1>
        <input className='search_input' ref={this.inputRef} type="text" defaultValue="" placeholder="Search for subject name..."/>
        <button className='search_button' onClick={this.updateRequestsFromSearch}>Search</button>
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
