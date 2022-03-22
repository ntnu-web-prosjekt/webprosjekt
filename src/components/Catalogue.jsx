import React, { Component } from "react";
import Filter from "./catalogue/Filter";
import Requests from "./catalogue/Requests";
import Sidebar from "./Sidebar";

export default class Catalogue extends Component {
  render() {
    return (
      <div className="page">
        <Sidebar />
        <div className="pageContent">
          <Requests />
          <Filter />
        </div>
      </div>
    );
  }
}
