import React, { Component } from "react";
// import Filter from "./Catalogue/Filter";
import Requests from "./Catalogue/Requests";
import Sidebar from "./Sidebar";
import "./Catalogue/catalogue.module.scss";

export default class Catalogue extends Component {
  render() {
    return (
      <div className="page">
        <Sidebar />
        <div className="pageContent catalogue">
          <Requests />
          {/* <Filter /> */}
        </div>
      </div>
    );
  }
}
