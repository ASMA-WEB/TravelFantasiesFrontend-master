import { Button, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import hotelService from "../../../services/HotelService";
import ImageUploader from 'react-images-upload';
import hotelCategoryService from "../../../services/HotelCategoryService";
import roomCategoryService from "../../../services/RoomCategoryService";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  name: {
    fontSize: 130,
    backgroundColor: "white",
  },
}));

const ITEM_HEIGHT = 48;
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);

class AddRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
        CategoryName: " ",
        Description: " ",
        options : [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
],
    };
    this.handleCategoryNameChange = this.handleCategoryNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleClose = this.handleClose.bind(this);

  }
  handleCategoryNameChange(event) {
    this.setState({ CategoryName: event.target.value });
    }
    handleDescriptionChange(event) {
      this.setState({ Description: event.target.value });   
    }
    handleClick (event) {
    setAnchorEl(event.currentTarget);
  };

   handleClose () {
    setAnchorEl(null);
  };
  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    //   formData.append("CategoryName", this.state.CategoryName);
    //   formData.append("Description", this.state.Description);
    // console.log(formData.CategoryName);
    // console.log(formData.Description);
    // console.log(this.state);
    const data = this.state;
    console.log(data);
    roomCategoryService
      .addRoomCategory(data)
      .then((response) => {
        alert(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

    render() {
      
    return (
      <div style={{ marginTop: "100px", marginLeft:"300px", marginBottom:"100px"}}>
        <h1 style={{ position: "relative",marginLeft:"200px", fontSize: 50 }}>
                Add Room Category
        </h1>
            <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={this.handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={this.handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {this.state.options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>

        <form
          onSubmit={this.handleSubmit}
           enctype="multipart/form-data"
          style={{
            marginBottom: "30px",
            paddingLeft: "30px",
            paddingRight: "300px",
            borderColor: "black",
            borderRadius: "30px",
            borderStyle: "bold",
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Room Category Name:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="CategoryName"
                    fullWidth
                    value={this.state.CategoryName}
                    onChange={this.handleCategoryNameChange}
                  />
                </div>
              </div>
            </Grid>
                    <Grid item xs={8}></Grid>
            <Grid item xs={6}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Room Description:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Description"
                                    fullWidth
                                    multiline
                                    rowsMax="5"
                    value={this.state.Description}
                    onChange={this.handleDescriptionChange}
                  />
                </div>
              </div>
            </Grid> 
           
          </Grid>
          <button variant="contained" style={{color: "blue" , position:"absolute", left:"50%" , justifyContent: "center" , alignItems: "center"}}>
            {" "}
            Add new Room Category{" "}
          </button>
            </form>
            <Button>Back</Button>

      </div>
    );
  }
}

export default AddRoom;
