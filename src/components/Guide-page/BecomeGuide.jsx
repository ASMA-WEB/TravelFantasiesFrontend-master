import Axios from "axios";
import React, { Component } from "react";
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
//import Map from "./Map";
import guideService from "../../services/GuideService";
import userService from '../../services/UserService'

class BookGuide extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    
    selectedPaymentMethod: null, 
    isEmailValid: false,
    email: "" ,
    Title: "",
    Details: '',
    Cost: 0,
    Description: "",
    Experience: "",
    Visited_Places: 0,
    Languages: 0,
    Images: "images",
    Guide_Id:'',
    Status: false,
  };
  this.onDrop = this.onDrop.bind(this);

};

onDrop(event) {
  this.setState({
    selectedFile: event.target.files,
  });
}

handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData();
  formData.append("Title", this.state.Title);
  formData.append("Description", this.state.Description);
  formData.append("Detail", this.state.Detail);
  formData.append("End_Date", this.state.End_Date);
  formData.append("Status", false);
  formData.append("Cost", this.state.Cost);
  formData.append("Experience", this.state.Experience);
  formData.append("Visited_Places", this.state.Visited_Places);
  formData.append("Languages", this.state.Languages);
  //for (var x = 0; x < this.state.selectedFile.length; x++) {
   // formData.append("file", this.state.selectedFile[x]); 
  //}
  //console.log(this.state);
  console.log(formData);
  console.log(this.state);
  
  const data = this.state;
  //console.log(data);
  guideService
    .addGuide(formData)
    .then((response) => {
      alert("Sucessfully added");
    })
    .catch((error) => {
      console.log(error);
    });
  }

   /*
   submitHandler(){
    console.log(this.state)
    console.log(userService.getLoggedInUser()._id)
   Axios.get("http://localhost:4000/api/guide/unapproved")
   .then(res =>{
     console.log(res.data)
   })
   .catch(err=>{
     console.log(err)
   })  
 }

   submitHandler(){
     console.log(this.state)
     console.log(userService.getLoggedInUser()._id)
    Axios.post("http://localhost:4000/api/guide",{
      Title:  this.state.Title ,
      Description:  this.state.Description,
      Images:  this.state.Images,
      Guide_Id: userService.getLoggedInUser()._id,
      Status:  this.state.Status,
      Details:  this.state.Details,
      Cost:  this.state.Cost,
      Experience:  this.state.Experience,
      Visited_Places:  this.state.Visited_Places,
      Languages:  this.state.Languages,
    })
    .then(res =>{
      console.log(res.data)
    })
    .catch(err=>{
      console.log(err)
    }) 
  } */


  emailChangeHandler(value)
   {
    if (value.length == 0) {
      this.setState({
        isEmailValid: true,
      });
    } else {
      this.setState({
        isEmailValid: false,
        email: value,
      });
    }


  }
  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <Col sm="12">
          <Card>
            <CardHeader>Please Fill Out Details To Continue</CardHeader>
            <CardBody>
              
              <CardTitle tag="h3">Guide Details</CardTitle>
              <Form>

              <Row form>
                  <Col md={6}>
               <FormGroup>
                  <Label for="Place">Title</Label>
                  <Input
                    type="text"
                    name="title"
                    placeholder="Enter the title"
                    onChange={(event)=> this.setState({Title: event.target.value})}
                  />
                    </FormGroup>
                  </Col>    
                
              <FormGroup>
                  <Label for="Image">Image</Label>
                  <Input
                    type="file"
                    name="file"
                    multiple
                    onChange={this.onDrop}
                  />
                </FormGroup>

                </Row>


                <Row form>
                <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="experience">Experience</Label>
                      <Input
                        type="experience"
                        placeholder="Enter Experience"
                        onChange={(event)=> this.setState({Experience: event.target.value})}
                  
                      />
                    </FormGroup>
                  </Col>

                    <Col md={6} sm={12} lg={4}>
                      <FormGroup>
                        <Label for="visited_places">Visited_Places</Label>
                        <Input
                          type="string"
                          placeholder="Enter places name"
                          onChange={(event)=> this.setState({Visited_Places: event.target.value})}
                          />
                      </FormGroup>
                    </Col>
                    <Col md={6} sm={12} lg={4}>
                      <FormGroup>
                        <Label for="CVC">Departure_Date</Label>
                        <Input 
                        type="10/11/2020" 
                        placeholder="Enter Departure_Date" 
                        onChange={(event)=> this.setState({End_Date: event.target.value})}
                  
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
                        onChange={(event)=> this.setState({Cost: event.target.value})}
                  
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="Languages">Languages</Label>
                      <Input
                        type="string"
                        placeholder="Enter languages"
                        onChange={(event)=> this.setState({Languages: event.target.value})}
                  
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="Persons">Persons</Label>
                      <Input
                        type="Number"
                        placeholder="How many of You will be there?"
                        onChange={(event)=> this.setState({Total_Seats: event.target.value})}
                  
                      />
                    </FormGroup>
                  </Col>
                </Row>


                  <FormGroup>
                  <Label for="Place">Description/Facilities</Label>
                  <Input
                    type="text"
                    name="place"
                    placeholder="Enter Detail"
                    onChange={(event)=> this.setState({Description: event.target.value})}
                  
                  />
                </FormGroup>
               
              
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
                  onClick={(event)=> this.handleSubmit(event)}
                >
                  Submit
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}



export default BookGuide;





//import React from "react";
//import { Grid, Button, TextField } from "@material-ui/core";
//import { makeStyles } from '@material-ui/core/styles';

//const useStyles = makeStyles((theme) => ({
  //root: {
    //'& > *': {
      //margin: theme.spacing(10),
      //width: '50ch',
    //},
  //},
//}));

//const Become_a_host = (props) => {
  //console.log(props);

    //return ( 
      //  <Grid container spacing={3}>
        //  <Grid item xs={12}>
          //    <h1>Create a your tour</h1>
           //</Grid>
              
             // <Grid item xs={3}></Grid>

               // <Grid item xs={6}>
                // <TextField  label="Host_Name" fullWidth/>
                 //<TextField  label="Gender" fullWidth/>
                 //<TextField  label="Contact_No" fullWidth/>
                 //<TextField  label="Host_Email" fullWidth/>
                 //<TextField  label="Company_Name" fullWidth/>
                 //<TextField  label="Company_ContactNo" fullWidth/>
                 //<TextField  label="Place_Name"fullWidth />
                 //<TextField  label="Tour_Category"fullWidth />
                 //<TextField  label="Cost"fullWidth />
                 //<TextField  label="No_of_people"fullWidth />
                 //<TextField  label="No_of_days" fullWidth/>
                 //<TextField  label="Arival_location" fullWidth/>
                 //<TextField  label="Departure_location" fullWidth/>
                 //<TextField  label="Description/Facilities"fullWidth />
               //</Grid>

               

                 //   <Grid item xs={3}></Grid>
                   // <Grid item xs={3}></Grid>

                     //    <Grid item xs={6}>
                       //     <Button variant="contained" colour="primary">
                         //    Create Tour
                           // </Button>
                         //</Grid>
        
        //</Grid>
     //);
//}
 
//export default Become_a_host;