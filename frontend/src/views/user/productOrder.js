/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    Label
} from "reactstrap";
import { useLocation, useNavigate } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import axios from "axios";
import jwt from 'jsonwebtoken';
import routes from "user-routes";

var ps;

function ProductOrder(props) {
    const [userData, setUserData] = useState();
    const [type, setType] = useState("card");
    const [category, setCategory] = useState("wood");
    const [purpose, setPurpose] = useState("");
    const [custom, setCustom] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const orderData = {
            type,
            category,
            purpose,
            custom,
            userId: userData.userId, // Pass userId from the decoded token
        };

        axios.post('http://localhost:3001/user/explore-products/product-order', orderData)
            .then(res => {
                alert('Order Made');
                navigate('/user/explore-products');
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

    return (
        <>
            <div className="wrapper">
                <Sidebar
                    {...props}
                    routes={routes}
                />
                <div className="main-panel" ref={mainPanel}>
                    <Navbar {...props} />
                    <div className="content">
                    {
                   // userData.userId
                    }
                        <Row>
                            <Col md="8" style={{ margin: 'auto' }}>
                                <Card className="card-user">
                                    <CardHeader>
                                        <CardTitle tag="h5">Make your Order</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <Form onSubmit={handleSubmit}>
                                            <Row>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <Label for="productType">Product Type</Label>
                                                        <Input
                                                            type="select"
                                                            name="productType"
                                                            id="productType"
                                                            value={type}
                                                            onChange={(e) => setType(e.target.value)}
                                                        >
                                                            <option value="card">Card</option>
                                                            <option value="board">Board</option>
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <Label for="category">Category</Label>
                                                        <Input
                                                            type="select"
                                                            name="category"
                                                            id="category"
                                                            value={category}
                                                            onChange={(e) => setCategory(e.target.value)}
                                                        >
                                                            <option value="wood">Wood</option>
                                                            <option value="plastic">Plastic</option>
                                                            <option value="metal">Metal</option>
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <label>Purpose</label>
                                                        <Input
                                                            type="textarea"
                                                            placeholder="Purpose of Usage"
                                                            onChange={(e) => setPurpose(e.target.value)}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <label>Any specific customization</label>
                                                        <Input
                                                            type="textarea"
                                                            placeholder="You can include a link to a photograph or describe any theme as per your need"
                                                            onChange={(e) => setCustom(e.target.value)}
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
                                                        Make Order
                                                    </Button>
                                                </div>
                                            </Row>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <Footer fluid />
                </div>
            </div>
        </>
    );
}

export default ProductOrder;
