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
import { Link, useLocation,useNavigate } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import axios from 'axios';
import routes from "routes.js";

var ps;
function AddProduct(props) {
    const [product_name,setProductName] = useState();
    const [product_icon,setProductIcon] = useState();
    const [product_description,setProductDescription] = useState();
    const [product_longdescription,setProductLongDescription] = useState();
   
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:3001/admin/products/add-product/',{product_name, product_icon, product_description,product_longdescription})
      .then(res=> {
        alert('Added')
        navigate('/admin/products')
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
      <h7 align="center" style={{float:'right'}}>
        <Link style={{color:'black'}} to='https://demos.creative-tim.com/light-bootstrap-dashboard-pro/examples/components/icons.html'>
           Icon List 
        </Link>
        </h7>
        <Row>
          <Col md="8" style={{margin:'auto'}}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Add Products</CardTitle>
              </CardHeader>
              <CardBody>
                <Form  onSubmit= {handleSubmit}>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Prduct Name</label>
                        <Input
                          defaultValue=""
                          placeholder="Product Name"
                          type="text"
                          onChange={(e)=> setProductName(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Product icon</label>
                        <Input
                          defaultValue=""
                          placeholder="nc-icon"
                          type="text"
                          onChange={(e)=> setProductIcon(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Product Short Description</label>
                        <Input
                          type="text"
                          defaultValue=""
                          onChange={(e)=> setProductDescription(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Product Long Description</label>
                        <Input
                          type="textarea"
                          defaultValue=""
                          onChange={(e)=> setProductLongDescription(e.target.value)}
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
                        Add Product
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

export default AddProduct;
