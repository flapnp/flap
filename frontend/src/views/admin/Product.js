
import React, {useState, useEffect} from "react";
// react plugin used to create charts
// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  Row,
  Col,
} from "reactstrap";
import '../../assets/css/style.css';
import { Link } from "react-router-dom";  
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const fetchProducts = () => {
    axios.get('http://localhost:3001/admin/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };
  const handleDelete = (productId) => {
    axios.delete(`http://localhost:3001/admin/products/${productId}`, { withCredentials: true })
      .then(response => {
        console.log(response.data.message);
        setProducts(prevProducts => prevProducts.filter(product => product._id !== productId));
        alert('Deleted Sucessfully')
      })
      .catch(error => {
        console.error('Error deleting product:', error);
        alert('Error deleting product. Please try again.');
      });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
     <div className="content">
  <Row>
    <Col lg="3" md="6" sm="6" style={{ margin: '0em auto 2em 0em' }}>
      <Link to='add-product/'>
        <button className="add-product">Add A Product</button>
      </Link>
    </Col>
  </Row>
  <Row>
    {products.map(product => (
      <Col lg="4" md="6" sm="6" key={product._id}>
        <Card className="card-stats">
          <span style={{textAlign:'right', padding:'0.2em 0.9em'}} > 
            <i 
              class="fa-regular 
              fa-pen-to-square">
            </i> || 
            <i style={{cursor:'pointer'}} 
              onClick={() => handleDelete(product._id)} 
              class="fa-solid fa-trash-can">
            </i> 
          </span>
          <CardBody>
            <div className="icon-big text-center icon-warning">
              <i style={{ fontSize: '68px' }} className={product.product_icon} />
            </div>
            <div>
              <h6 align="center">{product.product_name}</h6>
            </div>
          </CardBody>
          <CardFooter>
            <hr />
            <div className="stats">
              {product.product_description}
            </div>
          </CardFooter>
        </Card>
      </Col>
    ))}
  </Row>
</div>

    </>
  );
}

export default Products;
