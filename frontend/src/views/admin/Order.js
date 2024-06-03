import React, {useState, useEffect} from 'react';
// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
  } from "reactstrap";
import { Link } from "react-router-dom";
import axios from 'axios';

function FCard() {
  const [orders, setOrders] = useState([]);
  const fetchOrders = () => {
    axios.get('http://localhost:3001/admin/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);
    const scrollbarStyles = {
        WebkitOverflowScrolling: 'touch', // Optional: Improve scrolling smoothness      
      };
  return (
   <>
    <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Pending Orders</CardTitle>
              </CardHeader>
              <CardBody>
                <Table style={scrollbarStyles} responsive>
                  <thead className='tableHead'>
                    <tr>
                      <th>User ID</th>
                      <th>Category</th>
                      <th>Custom</th>
                      <th>Purpose</th>
                      <th>Status</th>
                      <th className="">Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                  {orders.map(order => (
                  <tr key={order.userId}>
                        <td>{order.userId}</td>
                        <td>{order.category}</td>
                        <td>{order.custom}</td>
                        <td>{order.purpose}</td>
                        <td>{order.status}</td>
                        <td style={{ display: 'flex' }}>
                          <Link to="/admin/users/accept" className="nav-link btn-rotate">
                            <i style={{ fontSize: 20 }} className="fa-solid fa-check text-primary edeButton"></i>
                          </Link>
                          <span style={{ fontSize: 22 }}> || </span>
                          <Link to="/admin/users/edit-order" className="nav-link btn-rotate">
                            <i style={{ fontSize: 20 }} className="fa-solid fa-pen-to-square text-secondary edeButton"></i>
                          </Link>
                          <span style={{ fontSize: 22 }}> || </span>
                          <Link to="/admin/users/edit" className="nav-link btn-rotate">
                            <i style={{ fontSize: 20 }} className="fa-solid fa-trash text-danger edeButton"></i>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      {/*  */}
   </>
  )
}

export default FCard;
