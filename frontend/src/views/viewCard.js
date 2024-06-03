import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
} from "reactstrap";
import Footer from "components/Footer/Footer.js";
import { Link } from "react-router-dom";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

function ViewCard() {
 
  return (
    <>
      <div className="content">
        <Card>
        <Row style={{margin:'0.2em -3em 0.2em 1em'}}>
            <Col md="10"></Col>
            <Col md="1"  style={{display:'flex'}}>
            <Link to="/edit-card" className="nav-link btn-rotate">
                <i style={{fontSize:22}} class="fa-solid fa-pen-to-square text-primary edeButton"></i>
            </Link>
                <span style={{fontSize:24}}> || </span>
            <Link to="/edit-card" className="nav-link btn-rotate">
                <i style={{fontSize:22}} class="fa-solid fa-trash text-danger edeButton"></i> 
            </Link>
            </Col>
        </Row>
        <Row>
          <Col md="6" style={{margin:'auto'}} >
            <Card className="card-user" style={{margin:'0em 2em 2em 2em'}}>
              <div className="image">
                <img alt="..." src={require("assets/img/damir-bosnjak.jpg")} />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/mike.jpg")}
                    />
                    <h5 className="title">Front</h5>
                  </a>
                  <p className="description">@chetfaker</p>
                </div>
              </CardBody>
            </Card>
            </Col>
            <Col md="6" style={{margin:'auto'}} >
            <Card className="card-user" style={{margin:'0em 2em 2em 2em'}}>
              <div className="image">
                <img alt="..." src={require("assets/img/damir-bosnjak.jpg")} />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/mike.jpg")}
                    />
                    <h5 className="title">Back</h5>
                  </a>
                  <p className="description">@chetfaker</p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </Card>
      </div>
      <Footer fluid />
     
      {/* <FixedPlugin
        bgColor={backgroundColor}
        activeColor={activeColor}
        handleActiveClick={handleActiveClick}
        handleBgClick={handleBgClick}
      /> */}
    
    </>
  );
}

export default ViewCard;
