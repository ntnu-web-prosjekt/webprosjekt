import React, { Component } from "react";

export default class MyReview extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      reviewText: this.props.note
    }
  }

  handleClick = () => {
    this.props.onClick(this.state.reviewText);
  }

  handleChange = (e) => {
    this.setState({
      reviewText: e.target.value
    })

    e.preventDefault();
  }

  render() {
    return (
      <div className="myReview">
        <h2>My Review</h2>
        <textarea
          placeholder="Review of teacher..."
          value={this.state.reviewText}
          id="myReview"
          onChange={this.handleChange}
          rows="8"
          cols="60"
        ></textarea>
        <button type="button" onClick={this.handleClick}>Save</button>
      </div>
    );
  }
}
