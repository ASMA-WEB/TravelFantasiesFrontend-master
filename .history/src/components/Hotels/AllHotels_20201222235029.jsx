import React, { Component } from "react";
import PropTypes from "prop-types";
import SingleHotel from "./SingleHotel";
import { Grid } from "@material-ui/core";

export class AllHotels extends Component {
  constructor(props) {
    super(props);

    //this.handleCommentEdit = this.handleCommentEdit.bind(this);
  }
  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
  render() {
    return (
      <div>
        {this.props.results.length == 0 ||
        this.props.results.length === null ? (
          <p>Loading...</p>
        ) : (
          <Grid container spacing={3}>
            {this.props.results.map(
              (hotel, index) => (
                (hotel.Image =
                  "data:image/jpeg;base64," +
                  this.arrayBufferToBase64(hotel.Image.data.data)),
                (
                  <SingleHotel
                    key={index}
                    hotel={hotel}
                    handle={this.props.handleCommentEdit}
                  />
                )
              )
            )}
          </Grid>
        )}
      </div>
    );
  }
}

export default AllHotels;
