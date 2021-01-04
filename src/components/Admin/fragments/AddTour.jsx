import {
  CssBaseline,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardTitle,
  CardText,
  CardHeader,
  FormFeedback,
  CardBody,
} from "reactstrap";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import tourService from "../../../services/TourService";
import ImageUploader from "react-images-upload";
import AppBarComponenet from "./AppBar";
import tourCategoryService from "../../../services/TourCategoryService";
import Map from "./Map";

const useStyles = makeStyles((theme) => ({
  name: {
    fontSize: 130,
    backgroundColor: "white",
  },
}));

class AddTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TourName: " ",
      Location: " ",
      Description: "",
      Start_Date: "",
      End_Date: "",
      Arrival_Time: " ",
      Departure_Time: " ",
      Facilities: " ",
      no_of_days: 0,
      Total_Seats: 0,
      Status: "Yes",
      Cost: 0,
      ImageName: " ",
      selectedFile: [],
      Categories: [],
      SelectedCategory: 0,
    };
    this.onDrop = this.onDrop.bind(this);
    this.handleTourNameChange = this.handleTourNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleStart_DateChange = this.handleStart_DateChange.bind(this);
    this.handleEnd_DateChange = this.handleEnd_DateChange.bind(this);
    this.handleArrival_TimeChange = this.handleArrival_TimeChange.bind(this);
    this.handleDeparture_TimeChange = this.handleDeparture_TimeChange.bind(this);
    this.handleno_of_daysChange = this.handleno_of_daysChange.bind(this);
    this.handleTotal_SeatsChange = this.handleTotal_SeatsChange.bind(this);
    this.handleFacilitiesChange = this.handleFacilitiesChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleCostChange = this.handleCostChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.change = this.change.bind(this);
    //this.onMarkerDragEnd = this.onMarkerDragEnd.bind(this);
  }
  componentDidMount() {
    tourCategoryService
      .getTourCategory(this.props.page, this.props.perPage)
      .then((data) => {
        this.setState({ Categories: data });
        console.log(this.state.Categories);
        // setTotal(data.total);
        // setPerPage(10);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleTourNameChange(event) {
    this.setState({ TourName: event.target.value });
  }
  handleLocationChange(event) {
    this.setState({ Location: event.target.value });
  }
  handleDescriptionChange(event) {
    this.setState({ Description: event.target.value });
  }
  handleStart_DateChange(event) {
    this.setState({ Start_Date: event.target.value });
  }
  handleArrival_TimeChange(event) {
    this.setState({ Arrival_Time: event.target.value });
  }
  handleEnd_DateChange(event) {
    this.setState({ End_Date: event.target.value });
  }
  handleDeparture_TimeChange(event) {
    this.setState({ Departure_Time: event.target.value });
  }
  handleno_of_daysChange(event) {
    this.setState({ no_of_days: event.target.value });
  }
  handleTotal_SeatsChange(event) {
    this.setState({ Total_Seats: event.target.value });
  }
  handleFacilitiesChange(event) {
    this.setState({ Facilities: event.target.value });
  }
  handleStatusChange(event) {
    this.setState({ Status: event.target.value });
  }
  handleCostChange(event) {
    this.setState({ Cost: event.target.value });
  }

  onDrop(event) {
    this.setState({
      selectedFile: event.target.files,
    });
  }
  change = async (event) => {
    this.setState({ SelectedCategory: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("TourName", this.state.TourName);
    formData.append("Location", this.state.Location);
    formData.append("Description", this.state.Description);
    formData.append("Start_Date", this.state.Start_Date);
    formData.append("Arrival_Time", this.state.Arrival_Time);
    formData.append("End_Date", this.state.End_Date);
    formData.append("Departure_Time", this.state.Departure_Time);
    formData.append("no_of_days", this.state.no_of_days);
    formData.append("Total_Seats", this.state.Total_Seats);
    formData.append("Status", true);
    formData.append("Cost", this.state.Cost);
    formData.append("Facilities", this.state.Facilities);
    formData.append("Category", this.state.SelectedCategory_id);
    for (var x = 0; x < this.state.selectedFile.length; x++) {
      formData.append("file", this.state.selectedFile[x]);
    }
    console.log(this.state);
    console.log(formData);
    const data = this.state;
    tourService
      .addTour(formData)
      .then((response) => {
        alert(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  /*onMarkerDragEnd(event) {
    console.log("ji");
    console.log(event.latLng.lat());
    console.log(event.latLng.lng());
  }*/
  render() {
    return (
      <div style={{  marginTop: "50" }}>
       

        <form
          onSubmit={this.handleSubmit}
          enctype="multipart/form-data"
          style={{
            marginBottom: "50px",
            paddingLeft: "300px",
            paddingRight: "300px",
            borderColor: "black",
            borderRadius: "30px",
            borderStyle: "bold",
          }}
        >
          <Col sm="12">
          <Card>
            <CardHeader>Add new Tour</CardHeader>
            <CardBody>
            
              
              <CardTitle tag="h4">Add Tour Detail</CardTitle>
              <Form>
          
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <h6>Select Tour Category</h6>
              <select
                onChange={this.change}
                value={this.state.SelectedCategory}
              >
                {this.state.Categories.map((Category, index) => (
                  <option key={Category._id} value={Category._id}>
                    {" "}
                    {Category.Name}{" "}
                  </option>
                ))}
              </select>
            </Grid>


            <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="Place">TourName</Label>
                        <Input
                          type="text"
                          name="tourName"
                          placeholder="Enter the Tour name "
                          value={this.state.TourName}
                          onChange={this.handleTourNameChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <InputLabel id="demo-simple-select-outlined-label">
                          Availability Status
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={this.state.Status}
                          onChange={this.handleStatusChange}
                          label="Age"
                          fullWidth
                        >
                          <MenuItem value="">
                            <em>Select</em>
                          </MenuItem>
                          <MenuItem value={"Yes"}>Yes</MenuItem>
                          <MenuItem value={"No"}>No</MenuItem>
                        </Select>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row form>
                    <Col md={6} sm={12} lg={4}>
                      <FormGroup>
                        <Label for="location">Location</Label>
                        <Input
                          type="location"
                          placeholder="Enter location"
                          value={this.state.Location}
                          onChange={this.handleLocationChange}
                        />
                      </FormGroup>
                    </Col>

                    <Col md={6} sm={12} lg={8}>
                      <FormGroup>
                        <Label for="description">Description</Label>
                        <Input
                          type="description"
                          placeholder="description"
                          value={this.state.Description}
                          onChange={this.handleDescriptionChange}
                        />
                      </FormGroup>
                    </Col>
                   
                  </Row>

                  <Row form>

                  <Col md={6} sm={12} lg={6}>
                      <FormGroup>
                      <Label for="exampleDate">Start_Date</Label>
                          <Input
                              type="date"
                              name="date"
                              id="exampleDate"
                              placeholder="date placeholder"
                          value={this.state.Start_Date}
                          onChange={this.handleStart_DateChange}
                        />
                      </FormGroup>
                    </Col>

                    <Col md={6} sm={12} lg={6}>
                      <FormGroup>
                      <Label for="exampleDate">End_Date</Label>
                         <Input
                              type="date"
                              name="date"
                              id="exampleDate"
                              placeholder="date placeholder"
                          value={this.state.End_Date}
                          onChange={this.handleEnd_DateChange}
                        />
                      </FormGroup>
                    </Col>

                    </Row>


                    <Row form>

                  <Col md={6} sm={12} lg={6}>
                      <FormGroup>
                      <Label for="exampleTime">Arrival_Time</Label>
                         <Input
                           type="time"
                           name="time"
                           id="exampleTime"
                           placeholder="time placeholder"
                          value={this.state.Arrival_Time}
                          onChange={this.handleArrival_TimeChange}
                        />
                      </FormGroup>
                    </Col>

                    <Col md={6} sm={12} lg={6}>
                      <FormGroup>
                      <Label for="exampleTime">Departure_Time</Label>
                         <Input
                           type="time"
                           name="time"
                           id="exampleTime"
                           placeholder="time placeholder"
                          value={this.state.Departure_Time}
                          onChange={this.handleDeparture_TimeChange}
                        />
                      </FormGroup>
                    </Col>

                    </Row>

                    <Row form>
                    <Col md={6} sm={12} lg={4}>
                      <FormGroup>
                        <Label for="Cost">Cost</Label>
                        <Input
                          type="Number"
                          placeholder="Enter Your Budget Here"
                          value={this.state.Cost}
                          onChange={this.handleCostChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6} sm={12} lg={4}>
                      <FormGroup>
                        <Label for="Days">Days</Label>
                        <Input
                          type="Number"
                          placeholder="Enter Number of Days You Prefer"
                          value={this.state.no_of_days}
                          onChange={this.handleno_of_daysChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6} sm={12} lg={4}>
                      <FormGroup>
                        <Label for="Total_Seats">Total_Seats</Label>
                        <Input
                          type="Number"
                          placeholder="How many of You will be there?"
                          value={this.state.Total_Seats}
                          onChange={this.handleTotal_SeatsChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup>
                    <Label for="Facilities">Facilities</Label>
                    <Input
                      type="text"
                      name="place"
                      placeholder="Enter Detail"
                      value={this.state.Facilities}
                      onChange={this.handleFacilitiesChange}
                    />
                  </FormGroup>
                  <Label for="Images">Images</Label>
                  <Input
                    type="file"
                    name="file"
                    multiple
                    onChange={this.onDrop}
                  />

                  <FormGroup check>
                    <Input type="checkbox" name="check" id="exampleCheck" />
                    <Label for="exampleCheck" check>
                      Agree to Terms and Conditions
                    </Label>
                  </FormGroup>
                  <Button
                    style={{
                      marginTop: 30,
                      alignSelf: "center",
                      textAlign: "center",
                      justifyContent: "center",
                    }}
                    //onClick={()=> this.submitHandler()}
                  >
                    Submit
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </form>

            
      </div>
    );
  }
}

export default AddTour;
