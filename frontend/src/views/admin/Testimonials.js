
import React, {useState, useEffect} from "react";
// react plugin used to create charts
// reactstrap components
import {
  Card,
  CardBody,
  Row,
  Col,
} from "reactstrap";
import '../../assets/css/style.css';
import { Link } from "react-router-dom";  
import axios from "axios";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const fetchTestimonials = () => {
    axios.get('http://localhost:3001/admin/testimonial/')
      .then(response => {
        setTestimonials(response.data);
      })
      .catch(error => {
        console.error('Error fetching testimonials:', error);
      });
  };
  const handleDelete = (testimonialId) => {
    axios.delete(`http://localhost:3001/admin/testimonial/${testimonialId}`, { withCredentials: true })
      .then(response => {
        console.log(response.data.message);
        setTestimonials(prevTestimonial => prevTestimonial.filter(testimonial => testimonial._id !== testimonialId));
        alert('Deleted Sucessfully')
      })
      .catch(error => {
        console.error('Error deleting testimonial:', error);
        alert('Error deleting testimonial. Please try again.');
      });
  };
  useEffect(() => {
    fetchTestimonials();
  }, []);
  const formatImagePath = (path) => {
    if (typeof path === 'string') {
      return path.split('\\').join('/');
    }
    return ''; // Return empty string for non-string values
  };
  return (
    <>
     <div className="content">
  <Row>
    <Col lg="3" md="6" sm="6" style={{ margin: '0em auto 2em 0em' }}>
      <Link to='add-testimonial/'>
        <button class="prod-button">Add Testimonial</button>
      </Link>
    </Col>
  </Row>
  <Row>
    {testimonials.map(testimonial => (
      <Col lg="12" md="12" sm="12" 
      key= {testimonial._id}
      >
        <Card className="card-stats">
          <span style={{textAlign:'right', padding:'0.2em 0.9em'}} > 
            {/* <i 
              class="fa-regular 
              fa-pen-to-square">
            </i> ||  */}
            <i style={{cursor:'pointer'}} 
              onClick={() => handleDelete(testimonial._id)} 
              class="fa-solid fa-trash-can">
            </i> 
          </span>
          <CardBody>
            <div style={{display:'flex', justifyContent:'center', marginBottom:'1em'}}>
          <img
            src={`http://localhost:3001/${formatImagePath(testimonial.photoPath)}`}
            alt="Card Cover"
            width="auto"
            height="150"
            style={{borderRadius:'50%'}}
            />
            </div>
            <div>
              <h6 align="center">
                {testimonial.name}
                </h6>
            </div>
            <div style={{textAlign:'center', marginBottom:'1em'}}>
              <small >
                {testimonial.organization}
                </small>
            </div>
            <div style={{textAlign:'center', marginBottom:'1em'}}>
              <p >
                {testimonial.testimonials}
                </p>
            </div>
          </CardBody>
        
        </Card>
      </Col>
     ))} 
  </Row>
</div>

    </>
  );
}

export default Testimonials;
