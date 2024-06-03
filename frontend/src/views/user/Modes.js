import React from 'react'
import {
    Card,
    CardBody,

    Row,
    Col,
  } from "reactstrap";
function Modes() {
  return (
       <>
      <div className="content">
        <div>
        <h4>Default Modes</h4>
        <hr  style={{ marginTop: '-2rem',
                      marginLeft:'14em',
                      borderWidth: '2px',
                      borderColor:'#8c8c8c'
                      }}/>
        <Row style={{marginTop:'2rem'}}>
       
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center text-primary">
                      <i className="fa-brands fa-youtube text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers" style={{marginTop:'0.4em'}}>
                      <p className="card-category" style={{fontSize:'0.7em'}}> Youtube</p>
                     
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fa-brands fa-spotify text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers" style={{marginTop:'0.4em'}}>
                      <p className="card-category" style={{fontSize:'0.7em'}}> Spotify</p>
                
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fa-brands fa-facebook text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers" style={{marginTop:'0.4em'}}>
                      <p className="card-category" style={{fontSize:'0.7em'}}> Facebook</p>
                                          <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
             
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fa-brands fa-instagram text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers" style={{marginTop:'0.4em'}}>
                      <p className="card-category" style={{fontSize:'0.7em'}}> Instagram</p>
                                          <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fa-brands fa-x-twitter " />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers" style={{marginTop:'0.4em'}}>
                      <p className="card-category" style={{fontSize:'0.7em'}}> Twitter</p>
                                          <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fa-brands fa-threads " />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers" style={{marginTop:'0.4em'}}>
                      <p className="card-category" style={{fontSize:'0.7em'}}> Thread</p>
                                          <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fa-brands fa-snapchat text-warning"  />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers" style={{marginTop:'0.4em'}}>
                      <p className="card-category" style={{fontSize:'0.7em'}}> Snapchat</p>
                                          <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              
            </Card>
          </Col>
        </Row>
        </div>

        <div >
        <h4>Custom Modes</h4>
        <hr  style={{ marginTop: '-2rem',
                      marginLeft:'14em',
                      borderWidth: '2px',
                      borderColor:'#8c8c8c'
                      }}/>
        <Row style={{marginTop:'2rem'}}>
        <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fa-solid fa-plus text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers" style={{marginTop:'0.4em'}}>
                      <p className="card-category" style={{fontSize:'0.7em'}}> Add Mode</p>
                     
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </div>
        </div>
</>
  )
}

export default Modes
