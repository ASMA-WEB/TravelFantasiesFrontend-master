import React from "react";
import { Container, Row, Col, Button, Card, CardTitle, CardText,CardBody, CardSubtitle,Badge} from "reactstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";


import "./Packages.css";
// import tours from "../components/Package";
import imgCard1 from "./img-card (1).jpg";
import imgCard2 from "./img-card (2).jpg";
import imgCard3 from "./img-card (3).jpg";
import imgCard4 from "./img-card (4).jpg";




const PackagesDetailPage = (props) => (
  <div className="subComponent">
    <Container>
    
      <section className="tour-cover item-center">
      <Badge
                    color="success"
                    style={{ position: "absolute", padding: 10 }}
                  >
                    Flat 20% OFF
          </Badge>
        <img
        // src={
        //   "data:image/jpeg;base64," +
        //   this.arrayBufferToBase64(item.Images.data.data)
        //   }
         src={imgCard1} alt="" 
         />
        <h1>{props.currentPackage.PackageName}</h1>
        <h1>{props.currentPackage.Location}</h1>
        <h4>Spent great time with Family</h4>
        <p>{props.currentPackage.Days}4 days and 5 nights</p>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
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
              <p>
                Morbi facilisis, odio vitae egestas pretium, mauris tortor
                vulputate dolor, non interdum nunc tellus at dolor. Donec
                condimentum et augue vitae volutpat. Fusce vitae laoreet sem.
                Integer a justo sit amet nibh vehicula blandit. Suspendisse
                faucibus venenatis egestas. In vulputate sapien sit amet ligula
                vulputate, in consequat ex molestie. Curabitur hendrerit
                pulvinar vehicula. Phasellus quis posuere tortor. Cras
                pellentesque vehicula dui nec fermentum. Sed venenatis nunc
                justo. Quisque metus est, volutpat quis scelerisque in,
                fermentum sed lacus. Sed sed pretium massa. Aenean imperdiet
                molestie turpis at egestas.
              </p>
            </div>
          </Col>
          <Col sm="4">
            
          <Card body outline color="danger">
        
        

          <CardBody>
          <CardTitle tag="h5"></CardTitle>
          <CardTitle tag="h3">Total Price</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.currentPackage.Cost}</CardSubtitle>
          <CardTitle tag="h3"> Discount</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.currentPackage.Discount}</CardSubtitle>
          <CardTitle tag="h3">After Discount</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.currentPackage.Cost-(props.currentPackage.Cost*props.currentPackage.Discount)/100}</CardSubtitle>
          <CardTitle tag="h5"></CardTitle>
          <CardTitle tag="h3">Allowed Persons </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.currentPackage.AllowedPersons}</CardSubtitle>
          <CardTitle tag="h3">Meal</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.currentPackage.Meal}</CardSubtitle>
          <CardTitle tag="h3">Hotel</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.currentPackage.Hotel}</CardSubtitle>
         
    
          
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

          <Col sm="4">
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
          </Col>
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

export default PackagesDetailPage;