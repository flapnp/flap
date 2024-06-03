/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useCallback } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Row,
  Col,
} from "reactstrap";
import { useLocation } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import {  useParams } from 'react-router-dom';
import '../../assets/css/style.css';
import axios from "axios";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "user-routes";

var ps;
function ProductDetails(props) {
  const [product, setProduct] = useState([]);
  const { productId } = useParams(); 

  const fetchProductDetails = useCallback(() => {
    axios.get(`http://localhost:3001/user/explore-products/details/${productId}`)
      .then(response => {
        console.log('Product details response:', response.data);
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [productId]);

  useEffect(() => {
    fetchProductDetails();
  }, [fetchProductDetails]);
  
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
        {product ? (
          // Render details of the selected product
          <Row >
            <Col lg="6" style={{margin:'auto'}}>
              <Card className="card-stats">
                <CardBody>
                  <div className="icon-big text-center icon-warning">
                    <i style={{ fontSize: '68px' }} className={product.product_icon} />
                  </div>
                  <div>
                    <h6 align="center" className="prod-name" style={{ textDecoration: 'none !important' }}>{product.product_name}</h6>
                  </div>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div style={{ textDecoration: 'none !important' }} className="stats prod-name">
                    {product.product_description}
                  </div>
                  <hr />
                  <div style={{ textDecoration: 'none !important' }} >
                    {product.product_longdescription}
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        ) : (
          // Render loading or no product found message
          <h4 align="center">{productId ? 'Loading...' : 'No product found'}</h4>
        )}
      </div>
      <Footer fluid />
      </div>
      </div>
    </>
  );
}

export default ProductDetails;
