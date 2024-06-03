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
import axios from "axios";

function FCard() {
  const [cards, setCards] = useState([]);
  const fetchCards = () => {
    axios.get('http://localhost:3001/admin/cards')
      .then(response => {
        setCards(response.data);
      })
      .catch(error => {
        console.error('Error fetching cards:', error);
      });
  };

  useEffect(() => {
    fetchCards();
  }, []);
    const scrollbarStyles = {
        WebkitOverflowScrolling: 'touch', // Optional: Improve scrolling smoothness      
      };
  return (
   <>
    <div className="content">
        <Row>
        <Link to={`/admin/cards/create-card`}>
        <button style={{margin:'0 0 1em 1em'}} class="prod-button">Create Card</button>
       </Link>  
  
          <Col md="12" >
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Registered Card</CardTitle>
              </CardHeader>
              <CardBody>
                <Table style={scrollbarStyles} responsive>
                  <thead className='tableHead'>
                    <tr>
                      <th>Card ID</th>
                      <th>Card URL</th>
                      <th>User ID</th>
                      <th className="">Option</th>
                    </tr>
                  </thead>
                  <tbody>
                  {cards.map(card => (
                    <tr>
                      <td>{card._id}</td>
                      <td>{card.nfc_url}</td>
                      <td>{ card.uid===""? 'Not Available': card.uid }</td>
                      <td>
                      { card.uid===""? 
                      (<Link to="/admin/cards/add-user" >
                        <button style={{
                          border:'none',
                          padding:'0.60em 0.8em',
                          backgroundColor:'#1f4399',
                          color:'white'
                        }}>
                          Add User</button>
                      </Link>):
                       (<Link to="/admin/cards/view-card" >
                       <button style={{
                         border:'none',
                         padding:'0.60em 0.8em',
                         backgroundColor:'#1f4399',
                         color:'white'
                       }}>
                         View Card</button>
                     </Link>)
}
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
