import React, { useState, useEffect } from "react";
import { Button, Card, CardHeader, CardBody, CardTitle, FormGroup, Form, Input, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwt from 'jsonwebtoken';

function Support(props) {
    const [userData, setUserData] = useState();
    const [ticket, setTicket] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const getCurrentDateTime = () => {
        const currentDateTime = new Date().toISOString();
        return currentDateTime;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/user/support', { email: userData.email, ticket, description, datetime: getCurrentDateTime() })
            .then(res => {
                alert('Support Made');
                navigate('/user/dashboard');
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        const token = localStorage.getItem('token') || document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");

        if (token) {
            const decoded = jwt.decode(token);
            setUserData(decoded);
        }
    }, []);

    return (
        <div className="content">
            <Row>
                <Col md="8" style={{ margin: 'auto' }}>
                    <Card className="card-user">
                        <CardHeader>
                            <CardTitle tag="h5">Submit Support Ticket</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <label>Ticket Title</label>
                                            <Input
                                                type="text"
                                                placeholder="Enter ticket title"
                                                value={ticket}
                                                onChange={(e) => setTicket(e.target.value)}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <label>Ticket Description</label>
                                            <Input
                                                type="textarea"
                                                placeholder="Enter ticket description"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
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
                                            Submit Ticket
                                        </Button>
                                    </div>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Support;
