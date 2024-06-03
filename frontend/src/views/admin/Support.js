
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
// import { Link } from "react-router-dom";  
import axios from "axios";

function Support() {
  const [supports, setSupport] = useState([]);
  const fetchSupport = () => {
    axios.get('http://localhost:3001/admin/support')
      .then(response => {
        setSupport(response.data);
       
      })
      .catch(error => {
        console.error('Error fetching support:', error);
      });
  };
  const handleDelete = (supportId) => {
    axios.delete(`http://localhost:3001/admin/support/${supportId}`, { withCredentials: true })
      .then(response => {
        console.log(response.data.message);
        setSupport(prevSupport => prevSupport.filter(support => support._id !== supportId));
        alert('Deleted Sucessfully')
      })
      .catch(error => {
        console.error('Error deleting support:', error);
        alert('Error deleting support. Please try again.');
      });
  };
  useEffect(() => {
    fetchSupport();
  }, []);
  return (
    <>
     <div className="content">
  <Row>
    {supports.map(support => (
      <Col lg="12" md="12" sm="12" 
      key= {support._id}
      >
        <Card className="card-stats">
          <span style={{textAlign:'right', padding:'0.2em 0.9em'}} > 
            {/* <i 
              class="fa-regular 
              fa-pen-to-square">
            </i> ||  */}
            <i style={{cursor:'pointer'}} 
              onClick={() => handleDelete(support._id)} 
              class="fa-solid fa-trash-can">
            </i> 
          </span>
          <CardBody>
           
            <div>
              <h6 >
              {support.ticket}
                
                </h6>
            </div>
            <div style={{ margin:'-0.5em 0em 1.5em 0em'}}>
              <h7 >
                {support.email}
                </h7>
            </div>
            <div>
              <p >
                {support.description}
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

export default Support;
