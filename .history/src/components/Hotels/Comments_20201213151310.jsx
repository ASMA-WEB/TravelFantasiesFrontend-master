import React, { Component } from "react";
import HotelReviewService from "../../services/HotelReviewService";

export class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      ratings: 0,
      selectedFile: [],
      comment: "",
      Comments: [],
      user: [],
    };
    // this.myChangeHandler = this.myChangeHandler.bind(this);
    // this.ratingChanged = this.ratingChanged.bind(this);
    // this.onDrop = this.onDrop.bind(this);
    // this.handleCommentChange = this.handleCommentChange.bind(this);
  }

  componentDidMount() {
    //const { handle } = this.props.history.hotel
    HotelReviewService.getHotelReview(this.props.hotelId)
      .then((data) => {
        this.setState({ Comments: data });
        this.setState({ username: data.name });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return <div></div>;
  }
}

export default Comments;
