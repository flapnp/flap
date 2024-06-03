/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
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
} from "reactstrap";
import { useLocation, useNavigate } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import axios from "axios";
import routes from "routes";

var ps;

function CreateCard(props) {
    const [nfcUrl, setNfcUrl] = useState();
    const [uid, setUID] = useState('');
  
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/admin/cards/create-card' ,{ nfc_url: nfcUrl, uid: uid })
            .then(res => {
                alert('Card Created');
                navigate('/admin/cards');
            })
            .catch(err => console.log(err));
    };
   
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
                                        <CardTitle tag="h5">Create Card</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label>NFC URL</label>
                                                    <Input
                                                        type="text"
                                                        placeholder="NFC URL"
                                                        onChange={(e) => setNfcUrl(e.target.value)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label>User ID</label>
                                                    <Input
                                                        type="text"
                                                       
                                                        placeholder="User ID"
                                                        onChange={(e) => setUID(e.target.value)}
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
                                                    Create Card
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

export default CreateCard;
