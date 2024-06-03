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
import { 
  // Link, 
  useLocation,useNavigate } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import axios from 'axios';
import routes from "routes.js";

var ps;
function AddTestimonial(props) {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [testimonials, setTestimonials] = useState("");
  const [photo, setPhoto] = useState(null); // State to hold the selected file object
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("organization", organization);
      formData.append("photo", photo); // Append file object to form data
      formData.append("testimonials", testimonials);

      const response = await axios.post(
        "http://localhost:3001/admin/testimonial/add-testimonial",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure correct content type for file uploads
          },
        }
      );
      console.log(response.data);
      alert("Testimonial added successfully");
      navigate("/admin/testimonial");
    } catch (error) {
      console.error("Error adding testimonial:", error);
      alert("Error adding testimonial. Please try again.");
    }
  };
    
  
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
                <CardTitle tag="h5">Add Testimonial</CardTitle>
              </CardHeader>
              <CardBody>
                <Form  onSubmit= {handleSubmit}>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Name</label>
                        <Input
                          defaultValue=""
                          placeholder="Name"
                          type="text"
                          onChange={(e)=> setName(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Organization Name</label>
                        <Input
                          defaultValue=""
                          placeholder="Organization Name"
                          type="text"
                          onChange={(e)=> setOrganization(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Photo</label>
                        <Input type="file"
                         name="photo" 
                         onChange={(e) => setPhoto(e.target.files[0])} />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Testimonial</label>
                        <Input
                          type="textarea"
                          placeholder="Add Testimonial"
                          onChange={(e)=> setTestimonials(e.target.value)}
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
                        Add Testimonial
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

export default AddTestimonial;
