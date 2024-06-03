
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
import axios from "axios";
import {Link} from 'react-router-dom';

function ExploreProducts() {
  const [products, setProducts] = useState([]);
  const fetchProducts = () => {
    axios.get('http://localhost:3001/user/explore-products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
     <div className="content">
    <h4 align="center">You dont have any products please Make An Order</h4>
    <Link to={`/user/explore-products/product-order`}>
        <button style={{marginBottom:'1em'}} class="prod-button">Order Now</button>
    </Link>  
  <Row>
    {products.map(product => (
      <Col lg="4" md="6" sm="6" key={product._id}>
        
        <Card className="card-stats">
          <CardBody >
            <div className="icon-big text-center icon-warning">
              <i style={{ fontSize: '68px' }} className={product.product_icon} />
            </div>
            <div>
              <h6 align="center" className="prod-name" style={{textDecoration: 'none !important'}}>{product.product_name}</h6>
            </div>
          </CardBody>
          <CardFooter>
            <hr />
            <div  style={{textDecoration: 'none !important'}} className="stats prod-name">
              {product.product_description}
            </div>
            </CardFooter>
            <CardFooter style={{textAlign:'center'}}>
                <Link to={`/user/explore-products/details/${product._id}`}>
                    <button className="prod-button">View More</button>
                </Link>
          </CardFooter>
         
        </Card>
       
      </Col>
      
    ))}
  </Row>
</div>
    </>
  );
}

export default ExploreProducts;
