import React from "react";
import { Container, Row, Col, Button, Card, CardTitle, CardText,CardBody, CardSubtitle} from "reactstrap";
import ReactStars from "react-rating-stars-component";

import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarBorder from '@material-ui/icons/StarBorder';
import ListSubheader from '@material-ui/core/ListSubheader';
import "./Banner.css";
// import tours from "../components/Package";
 //import imgCard1 from "./img-card (1).png";
 import imgCard2 from "./img-card (2).png";
// import imgCard3 from "./img-card (3).jpg";
// import imgCard4 from "./img-card (4).jpg";


const firstExample = {
  size: 30,
  value: 2.5,
  count: 5,
  a11y: true,
  isHalf: true,
  emptyIcon: <i className="far fa-star" />,
  halfIcon: <i className="fa fa-star-half-alt" />,
  filledIcon: <i className="fa fa-star" />,
  onChange: newValue => {
    console.log(`Example 1: new value is ${newValue}`);
  }
};

const GuideDetail = (props) => (
  <div className="subComponent">
    <Container>
    
      <section style={{display:"flex",flexDirection:'row'}} className="tour-cover item-center">
      
            <div className="tour-gallery">
              <a href={imgCard2}>
                <img src={imgCard2} alt="" />
              </a>
              
            </div>
            <div style={{margin:"0 auto",  display:"flex",flexDirection:'row'}}>   
     <div >
        <h1>{props.currentGuide.GuideName}Muhammad Umar</h1>
        <h4>{props.currentGuide.ContactNo}03001010101</h4>
        <p>{props.currentGuide.Email}umar@gmail.com</p>
    </div>

    
        <Link to={"/book-Guide"} style={{ textDecoration: "none" }}>
            <Col col="8" md="12">
                <Button style={{display:"flex",flexDirection:'right', margin:"40px 0 0 50px" }} outline color="info">
                       Hire Me
                 </Button>
            </Col>
        </Link>
        </div>

      </section>
      <section className="tour-info">
        <Row   style={{ margin:"0 auto" }}>
          <Col sm="8">
            <div className="tour-desc">
              <p style={{textAlign:"justify"}}>
              {props.currentGuide.Detail}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                imperdiet, sem id vehicula lacinia, mi purus lacinia mauris,
                vitae mollis nisl elit in lorem. Suspendisse potenti. Cras
                elementum ullamcorper tortor, rutrum convallis nunc tempor
                tristique. Donec ut ipsum vel mauris hendrerit efficitur. Nullam
                eget massa interdum, euismod nunc ac, maximus risus. Aliquam nec
                rhoncus tortor. Suspendisse nulla diam, hendrerit a metus vitae,
                rutrum hendrerit nisl. Nulla vel venenatis massa. Mauris lacinia
                porttitor ex, a egestas nisi fringilla vitae. Nam fringilla leo
                ante, id interdum sapien facilisis vel. Morbi ut suscipit nulla.
                Sed vitae tempus elit, at laoreet urna.
              </p>
             
            </div>
          </Col>
          <Col sm="4">
            
          <Card body outline color="danger">
       
          <CardBody>
          <CardTitle tag="h5"></CardTitle>
          <CardTitle tag="h3">Cost</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.currentGuide.Cost}25000</CardSubtitle>
          <CardTitle tag="h3">Experience</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.currentGuide.Experience}2 years</CardSubtitle>
          <CardTitle tag="h5"></CardTitle>
          {/* <CardTitle tag="h3">Visited Places</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"> </CardSubtitle>
          <CardTitle tag="h3">Languages</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">18000</CardSubtitle> */}
<div>


<List component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Visted_Places
        </ListSubheader>
      }>
          <ListItem button >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Sawat" />
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Kalam" />
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Murree" />
          </ListItem>
        </List>

        <List component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Languages
        </ListSubheader>
      }>
          <ListItem button >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="English" />
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Urdu" />
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Punjabi" />
          </ListItem>
        </List>
          
      </div>

          <Link to={"/book-packages"} style={{ textDecoration: "none" }}>
                      <Col col="3" md="12">
                       <Button style={{ }} outline color="info">
                       Book Now
                      </Button>
                      </Col>
                   </Link>
          
        </CardBody>
      </Card>
      
          </Col>

          {/* <Col sm="4">
            <div className="tour-gallery">
              <a href={imgCard1}>
                <img src={imgCard1} alt="" />
              </a>
              <a href={imgCard2}>
                <img src={imgCard2} alt="" />
              </a>
              <a href={imgCard3}>
                <img src={imgCard3} alt="" />
              </a>
              <a href={imgCard4}>
                <img src={imgCard4} alt="" />
              </a>
            </div>
          </Col> */}
        </Row>
      </section>
    </Container>
    <section className="reviews">
      <Container>
        <section className="tour-msg text-center">
          <h1>Reviews and Suggestions</h1>
          <p>We're glad to hear something from you.</p>
          <form action="">
            <Row>
              <Col sm="6">
                <input
                  type="text"
                  name="Name"
                  id="reviewer-name"
                  placeholder="Your Name"
                  required
                />
                <br />
                <input
                  type="email"
                  name="Email"
                  id="reviewer-email"
                  placeholder="Your email"
                  required
                />
              </Col>
              <Col>
                <textarea
                  name="Message"
                  id="reviewer-message"
                  rows="4"
                  placeholder="Your Message"
                />
              </Col>
            </Row>
            <Button outline color="secondary" className="float-right">
              Submit
            </Button>
          </form>
        </section>
      </Container>
    </section>
  </div>
);

export default GuideDetail;