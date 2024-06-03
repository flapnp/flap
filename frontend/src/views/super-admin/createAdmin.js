/* eslint-disable react-hooks/rules-of-hooks */

import React, {useState} from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
//   CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import { useNavigate, useLocation } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import axios from "axios";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "super-admin-routes.js";

var ps;
function CreateAdmin(props) {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  // const [confirmpassword,setConfirmPassword]=useState(); 

  const navigate = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/super-admin/admins/create-admin',{email, password})
    .then(res=> {
      alert('Added')
      navigate('/super-admin/admins/')
    }).catch(err=>console.log(err))
  }


  //   const [backgroundColor, setBackgroundColor] = React.useState("black");
  // const [activeColor, setActiveColor] = React.useState("info");
  const mainPanel = React.useRef();
  const location = useLocation();
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });
  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);
  // const handleActiveClick = (color) => {
  //   setActiveColor(color);
  // };
  // const handleBgClick = (color) => {
  //   setBackgroundColor(color);
  // };
  return (
    <>
    <div className="wrapper">
      <Sidebar
        {...props}
        routes={routes}
        // bgColor={backgroundColor}
        // activeColor={activeColor}
      />
      <div className="main-panel" ref={mainPanel}>
        <Navbar {...props} />
      <div className="content">
        <Row>
          <Col md="8" style={{margin:'auto'}}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Create Admin</CardTitle>
              </CardHeader>
              <CardBody>
                <Form onSubmit= {handleSubmit}>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Email Address</label>
                        <Input
                          defaultValue=""
                          placeholder="Email Address"
                          type="email"
                          onChange={(e)=> setEmail(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Password</label>
                        <Input
                          defaultValue=""
                          placeholder="Password"
                          type="password"
                          onChange={(e)=> setPassword(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <label>Confirm Password</label>
                        <Input
                          defaultValue=""
                          placeholder="Password"
                          type="password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                 
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Create Admin
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer fluid />
      </div>
      {/* <FixedPlugin
        bgColor={backgroundColor}
        activeColor={activeColor}
        handleActiveClick={handleActiveClick}
        handleBgClick={handleBgClick}
      /> */}
    </div>
    </>
  );
}

export default CreateAdmin;
