import React, { Component } from "react";

export class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      ratings: 0,
      selectedFile: [],
      comment: "",
      Comments: [],
      user: [],
      hotelId: 0,
    };
  }
   console.log(this.props.Comment.UserId);

  render() {
    return (
      <div>
        <h2>{this.props.Comment.UserId}</h2>
        <h3>hhh</h3>
      </div>
    );
  }
}

export default AddComment;
