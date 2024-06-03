import React from 'react';
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

function FCard() {
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
                <CardTitle tag="h4">Registered User</CardTitle>
              </CardHeader>
              <CardBody>
                <Table style={scrollbarStyles} responsive>
                  <thead className='tableHead'>
                    <tr>
                      <th>User ID</th>
                      <th>User Name</th>
                      <th>Contact</th>
                      <th>Address</th>
                      <th>Email</th>
                      <th>Facebook</th>
                      <th className="">Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td>OKAY</td>
                      <td>HO</td>
                      <td>OK</td>
                      <td style={{display:'flex'}}>
                      <Link to="/admin/users/edit-user" className="nav-link btn-rotate">
                        <i style={{fontSize:22}} class="fa-solid fa-pen-to-square text-primary edeButton"></i>
                      </Link>
                        <span style={{fontSize:24}}> || </span>
                      <Link to="/admin/users/edit" className="nav-link btn-rotate">
                          <i style={{fontSize:22}} class="fa-solid fa-trash text-danger edeButton"></i> 
                      </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td>OKAY</td>
                      <td>HO</td>
                      <td>OK</td>
                      <td style={{display:'flex'}}>
                      <Link to="/admin/users/edit" className="nav-link btn-rotate">
                <i style={{fontSize:22}} class="fa-solid fa-pen-to-square text-primary edeButton"></i>
            </Link>
                <span style={{fontSize:24}}> || </span>
            <Link to="/admin/users/edit" className="nav-link btn-rotate">
                <i style={{fontSize:22}} class="fa-solid fa-trash text-danger edeButton"></i> 
            </Link>
                      </td>
                    </tr><tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td>OKAY</td>
                      <td>HO</td>
                      <td>OK</td>
                      <td style={{display:'flex'}}>
                      <Link to="/admin/users/edit" className="nav-link btn-rotate">
                <i style={{fontSize:22}} class="fa-solid fa-pen-to-square text-primary edeButton"></i>
            </Link>
                <span style={{fontSize:24}}> || </span>
            <Link to="/admin/users/edit" className="nav-link btn-rotate">
                <i style={{fontSize:22}} class="fa-solid fa-trash text-danger edeButton"></i> 
            </Link>
                      </td>
                    </tr><tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td>OKAY</td>
                      <td>HO</td>
                      <td>OK</td>
                      <td style={{display:'flex'}}>
                      <Link to="/admin/users/edit" className="nav-link btn-rotate">
                <i style={{fontSize:22}} class="fa-solid fa-pen-to-square text-primary edeButton"></i>
            </Link>
                <span style={{fontSize:24}}> || </span>
            <Link to="/admin/users/edit" className="nav-link btn-rotate">
                <i style={{fontSize:22}} class="fa-solid fa-trash text-danger edeButton"></i> 
            </Link>
                      </td>
                    </tr>
                  
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
