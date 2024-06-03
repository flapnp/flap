// Admins.js

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Admins() {
  const [admins, setAdmins] = useState([]);
  axios.defaults.withCredentials = true;

  const handleDelete = (userId) => {
    axios.delete(`http://localhost:3001/super-admin/admins/${userId}`, { withCredentials: true })
      .then(response => {
        console.log(response.data.message);
        setAdmins(prevAdmins => prevAdmins.filter(admin => admin._id !== userId));
        alert('Deleted Sucessfully')
      })
      .catch(error => {
        console.error('Error deleting admin:', error);
        alert('Error deleting admin. Please try again.');
      });
  };

  const fetchAdmins = () => {
    axios.get('http://localhost:3001/super-admin/admins')
      .then(admins => setAdmins(admins.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const scrollbarStyles = {
    WebkitOverflowScrolling: 'touch',
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <div style={{display:'flex', justifyContent: 'space-between'}}>
                <CardTitle tag="h4">Admins Operating</CardTitle>
                <CardTitle tag="h6" style={{float:'right'}}><Link to="/super-admin/admins/create-admin" style={{padding:'1em',color:'white', cursor: 'pointer',backgroundColor:'#1f4399', border:'none'}}>Create Admin</Link></CardTitle>
                </div>
              </CardHeader>
              <CardBody>
                <Table style={scrollbarStyles} responsive>
                  <thead className='tableHead'>
                    <tr>
                      <th>Admin ID</th>
                      <th>Admin Name</th>
                      <th>Access</th>
                      <th className="">Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {admins.map(user => (
                      <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{`${user.email}`}</td>
                        <td>All</td>
                        <td style={{ display: 'flex' }}>
                          <Link to="/super-admin/admins/edit" className="nav-link btn-rotate">
                            <i style={{ fontSize: 20 }} className="fa-solid fa-pen-to-square text-secondary edeButton"></i>
                          </Link>
                          <span style={{ fontSize: 22 }}> || </span>
                          <button onClick={() => handleDelete(user._id)} className="nav-link btn-rotate" style={{ cursor: 'pointer',backgroundColor:'white', border:'none'}}>
                            <i style={{ fontSize: 20 }} className="fa-solid fa-trash text-danger edeButton"></i>
                          </button>
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
    </>
  );
}

export default Admins;
