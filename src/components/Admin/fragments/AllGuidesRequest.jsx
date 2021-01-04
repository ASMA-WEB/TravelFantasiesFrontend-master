import { Button, Grid, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { useHistory, withRouter } from "react-router";
import tourService from '../../../services/TourService';
import Paper from '@material-ui/core/Paper';
import { Delete, Edit, Update, Visibility } from '@material-ui/icons';
import Axios from "axios";
import userService from '../../../services/UserService';

        
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const classes = makeStyles((theme) => ({
  heading: {
    color: "black",
    fontStyle: "italic",
    fontSize: 25,
    textAlign: "center",
    
  },
  table: {
  minWidth: 500,
  },
}));

// const rows = [
//     createData('Title', "Lahore", "Hunza", "Kashmir"),
//     createData('Link', "https://youtu.be/R_t0qhgpB5I","https://youtu.be/R_t0qhgpB5I","https://youtu.be/R_t0qhgpB5I"),
//     createData('Description', "1 day tour","5 days tour","3 days tour"),
//   ];

class AllGuidesRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
        render: '',
        open: false,
        home: true,
        Tours: [],
        history: useHistory,
      }
      
    }
    arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };


  submitHandler(){
    console.log(this.state)
    console.log(userService.getLoggedInUser()._id)
   Axios.get("http://localhost:4000/api/tours/unapproved")
   .then(res =>{
     console.log(res.data)
   })
   .catch(err=>{
     console.log(err)
   })  
 }


     componentDidMount() {
     tourService
        .getTours(this.props.page, this.props.perPage)
        .then((data) => {
          this.setState({ Tours: data });
        })
        .catch((err) => {
          console.log(err);
        });

        Axios.get("http://localhost:4000/api/tours/unapproved")
         .then(res =>{
          console.log(res.data)
           })
         .catch(err=>{
          console.log(err)
          }) 
       };

  /*onViewButtonClick = (id) => {
   this.props.history.push({
       pathname: '/TourView',
       search: '?Tour=' + id,
       
    }) 
  }
  onDeleteButtonClick = (id) => {
     tourService
      .deleteTour(id)
      .then((response) => {
        alert(response);
      })
      .catch((err) => {
        console.log(err);
      
      });
  }*/
  
    render() {
        return (
            <div style={{marginLeft:"250px", marginTop:"120px"}}>
                <h1>
                  Welcome to  All Guide's Request !
                </h1>
                {this.state.Tours.length == 0 ? (
          <p>There are no Guide's Request</p>
        ) : (
            <Grid container spacing={0}>
                   <TableContainer component={Paper} style={{marginBottom:"10px", marginTop: "40px"}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Guide's Request Title</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
                      <TableBody>
                        {this.state.Tours.map((Tour, index) => (         
            <StyledTableRow key={Tour._id}>
              <StyledTableCell component="th" scope="row">{Tour.Title}</StyledTableCell>
              <StyledTableCell align="center">{Tour.cost}</StyledTableCell>
              <StyledTableCell align="center">{Tour.Description}</StyledTableCell>
              <StyledTableCell align="center">{Tour.Category}</StyledTableCell>
              <StyledTableCell align="center">
              <Button
                  onClick={()=> this.submitHandler()}
                >
                  Approved
                </Button>     

                <Button
                  onClick={()=> this.submitHandler()}
                >
                  UnApproved
                </Button>  

            </StyledTableCell>  
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
        </TableContainer>
            
            </Grid>
          )}
            </div>

        );
      
    }
   
}
export default withRouter(AllGuidesRequest);