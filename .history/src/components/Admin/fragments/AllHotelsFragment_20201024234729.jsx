import { Grid, makeStyles, Table, TableCell, TableRow, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import hotelService from '../../../services/HotelService';

        
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

const useStyles = makeStyles((theme) => ({
  heading: {
    color: "black",
    // marginTop: "40px",
    //paddingRight: "100px",
    // fontSize: "21",
        fontStyle: "italic",
    fontSize: 25,
        textAlign: "center",
    
  },
  table: {
    minWidth: 700,
  },
}));
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Name', 'Nishat', 'PC', 'Serena'),
  createData('Location', "Lahore",  "Lahore",  "Lahore"),
  createData('Cost per Day', 262, 16.0, 24),
  createData('Book Now', <button>Book Now</button>, <button>Book Now</button>, <button>Book Now</button>),
  
];
class AllHotel extends Component {
    constructor() {
        super();
        this.state = {
            render: '',
            open: false,
            home: true,
            hotels: [],
        }
        // this.handleHotelClick = this.handleHotelClick.bind(this);    
    }
    arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };
     componentDidMount() {
     hotelService
        .getHotels(this.props.page, this.props.perPage)
        .then((data) => {
          this.setState({ hotels: data });

          // setTotal(data.total);
          // setPerPage(10);
        })
        .catch((err) => {
          console.log(err);
        });
}
     
    render() {
        return (
            <div style={{marginLeft:"300px", marginTop:"120px"}}>
                <h1>
                    Hello All Hotel
                </h1>
                {this.state.hotels.length == 0 ? (
          <p>There are no hotels</p>
        ) : (
            <Grid container spacing={3}>
              {this.state.hotels.map((hotel, index) => (
                 hotel.Image = 'data:image/jpeg;base64,' + this.arrayBufferToBase64(hotel.Image.data.data),
                //  <SingleHotel key={index} hotel={hotel} />

                  <Table>
                      
                </Table>
              ))}
            </Grid>

          )}
                
            </div>

        );
      
        
    
    }
   
}
// export default withStyles(useStyles)(HomeFragment)
export default AllHotel;