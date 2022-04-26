import React, { Component } from "react";

export default class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: props.tags,
      tagsError: "",
      tagsSuccess: "",
      tagsLoading: false,
    };
  }
  render() {
    return (
      <div className="tags-container">
        <h2>My tags</h2>
        <ul>
          {this.state.tags.map((tag, index) => {
            return (
              <li key={index}>
                <span>{tag}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
