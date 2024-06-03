
import React, { useState, useEffect, useCallback } from "react";
// react plugin used to create charts
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Label,
  // CardFooter,
  // CardTitle,
  Row,
  // Col,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Col,
} from "reactstrap";
// core components
import {useNavigate } from "react-router-dom";

import jwt from 'jsonwebtoken';
import axios from "axios";
import '../../assets/css/style.css';


function Dashboard() {
  const [userData, setUserData] = useState({userId:"", firstname: "", middlename: "", lastname: "", email: "", phone: "", organization: "" });
  const [newUsername, setNewUsername] = useState();
  const [mode, setMode] = useState(); 
  const [bio, setBio] = useState(); 
  const [linkedin, setLinkedIn] = useState(); 
  const [theme, setTheme] = useState(); 
  const [youtube, setYoutube] = useState();
  const [spotify, setSpotify] = useState();
  const [twitter, setTwitter] = useState();
  const [instagram, setInstagram] = useState();
  const [facebook, setFacebook] = useState();
  const [coverPic, setCoverPic] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [userCard, setUserCard] = useState([]);
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    if (coverPic) {
      formData.append('coverPic', coverPic);
    }
  
    if (profilePic) {
      formData.append('profilePic', profilePic);
    }
    formData.append('uid', userData.userId);
    formData.append('mode', mode);
    formData.append('theme', theme);
    formData.append('linkedin', linkedin);
    formData.append('bio', bio);
    formData.append('youtube', youtube);
    formData.append('spotify', spotify);
    formData.append('twitter', twitter);
    formData.append('instagram', instagram);
    formData.append('facebook', facebook);
  
    try {
      await axios.post('http://localhost:3001/user/create-card', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Added');
      navigate('/user/');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token') || document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");

    if (token) {
        const decoded = jwt.decode(token);
        if (decoded) {
          setUserData({
            userId: decoded.userId || "",
            firstname: decoded.firstname || "",
            middlename: decoded.middlename || "",
            lastname: decoded.lastname || "",
            email: decoded.email || "",
            phone: decoded.phone || "",
            username: decoded.username || "",
            organization: decoded.organization || ""
          });
        }
    }
  }, []);

  const fetchUserCard = useCallback(() => {
    axios.get(`http://localhost:3001/user/preview-card/${userData.userId}`, { withCredentials: true })
      .then(response => {
        if (response && response.data) {
          setUserCard(response.data);
          console.log("response", response.data);
        } else {
          console.error('Empty response or invalid data received');
          // Handle the case where response or data is empty or invalid
        }
      })
      .catch(error => {
        console.error('Error fetching profile card:', error);
        // Handle API call errors
      });
  }, [userData]);

  useEffect(() => {
    if (userData) {
      fetchUserCard();
    }
  }, [userData, fetchUserCard]);

  const handleCreateUsername = (userId) => {
    // Assuming `username` is obtained from some input or state, adjust as needed
    // Example new username
    axios.put(`http://localhost:3001/create-username/${userId}`, { username: newUsername }, { withCredentials: true })
      .then(response => {
        console.log(response.data.message);
        // Update the username in the userData state
        setUserData(prevUserData => ({ ...prevUserData, username: newUsername }));
        alert('Username Created Successfully. Please log out and login again for setting username completely.');
      })
      .catch(error => {
        console.error('Error creating username:', error);
        alert('Error creating username. Please try again.');
      });
  };
  const formatImagePath = (path) => {
    if (typeof path === 'string') {
      return path.split('\\').join('/');
    }
    return ''; // Return empty string for non-string values
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8" style={{margin:'auto'}}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">My Profile</CardTitle>
              </CardHeader>
              <CardBody>
                <Form  onSubmit= {handleSubmit}>
                <Row>
                    <Col className="pr-1" md="8">
                      <FormGroup>
                        <label>User Name</label>
                        {userData.username ?
                        (<div>
                        <Input
                          value={userData.username}
                          disabled
                          placeholder=""
                          type="text"
                        />
                        </div>
                        ):
                        (
                          <div style={{display:'flex'}}>
                          <Input
                           placeholder=""
                           type="text"
                           onChange={(e)=> setNewUsername(e.target.value)}
                         />
                         <button style={{marginLeft:'1em', color:'white', width:'22em', border:'none', backgroundColor:'#1f4399'}} 
                        onClick={()=>handleCreateUsername(userData.userId)}
                         >Create Username</button>
                         </div>)
}
                      </FormGroup>
                    </Col>
                    </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          value={userData.firstname}
                          disabled
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    {userData.middlename ? 
                    (<Col className="pr-1" md="4">
                    <FormGroup>
                      <label>Middle Name</label>
                      <Input
                        value={userData.middlename}
                        disabled
                        placeholder=""
                        type="text"
                      />
                    </FormGroup>
                  </Col>):''
                  }
                    <Col className="pr-1 px-1" md="4">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          value={userData.lastname}
                          disabled
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Organization
                        </label>
                        <Input disabled value={userData.organization} type="email" />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input disabled value={userData.email} type="email" />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1 pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Phone
                        </label>
                        <Input disabled value={userData.phone} type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <hr/>
                  <Row>
                  <Col className="px-3" md="6">
                  <FormGroup>
                      <label>Cover Picture</label>
                      {userCard.cardCover ? 
                        (<div><br/>
                        <img
                          src={`http://localhost:3001/${formatImagePath(userCard.cardCover)}`}
                          alt="Card Cover"
                          width="auto"
                          height="150"
                        />
                      <label> For Updating Cover Picture</label>
                          <Input name="coverPic"   type="file" onChange={(e) => setCoverPic(e.target.files[0])} />
                        </div>): 
                        ( 
                          <Input name="coverPic" type="file" onChange={(e) => setCoverPic(e.target.files[0])} />
                        )
                      } 
                    </FormGroup>
                  </Col>
                    <Col className="px-3" md="6">
                    <FormGroup>
                      <label>Profile Picture</label>
                      {userCard.cardProfile ?
                      (<div><br/><img
                        src={`http://localhost:3001/${formatImagePath(userCard.cardProfile)}`}
                        alt="ProfilePic"
                        width="auto"
                        height="150"
                    />
                      <label> For Updating Profile Picture</label>
                      <Input type="file"  name="profilePic" onChange={(e) => setProfilePic(e.target.files[0])} />
                    </div>):
                    (
                      <Input type="file" name="profilePic" onChange={(e) => setProfilePic(e.target.files[0])} />
                    )}
                      </FormGroup>
                    </Col>
                    <Col className="px-3" md="12">
                      <FormGroup>
                        <label>Bio</label>
                        {userCard.bio ?
                        (<p>{userCard.bio}</p>):
                        (<Input
                          placeholder="Bio Link"
                          type="textarea"
                          value={(userCard.bio ? userCard.bio : '')}
                          onChange={(e)=> setBio(e.target.value)}
                        />)
                        }
                      </FormGroup>
                    </Col>
                    <Col className="px-3" md="12">
                      <FormGroup>
                        <label>Facebook</label>
                        {userCard.facebook ? 
                        (
                          <Input
                            placeholder="Facebook Link"
                            type="text"
                            value={userCard.facebook}
                            onChange={(e)=> setFacebook(e.target.value)}
                          />
                          ):
                        (
                        <Input
                          placeholder="Facebook Link"
                          type="text"
                          onChange={(e)=> setFacebook(e.target.value)}
                        />
                        )
                      }
                      </FormGroup>
                    </Col>
                    <Col className="px-3" md="12">
                      <FormGroup>
                        <label>Instagram</label>
                        {userCard.instagram ? 
                          (
                            <Input
                              placeholder="Instragram Link"
                              type="text"
                              value={userCard.instagram}
                              onChange={(e)=> setInstagram(e.target.value)}
                            />
                          ):
                          (
                            <Input
                              placeholder="Instragram Link"
                              type="text"
                              onChange={(e)=> setInstagram(e.target.value)}
                            />
                          )
                        }
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-3" md="12">
                      <FormGroup>
                        <label>Youtube</label>
                        {userCard.youtube ? 
                        (<Input
                          placeholder="Youtube Link"
                          type="text"
                          value={userCard.youtube}
                          onChange={(e)=> setYoutube(e.target.value)}
                        />):
                        (<Input
                          placeholder="Youtube Link"
                          type="text"
                          onChange={(e)=> setYoutube(e.target.value)}
                        />)
                        }
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-3" md="12">
                      <FormGroup>
                        <label>Spotify</label>
                        {userCard.spotify ? 
                        (<Input
                          placeholder="Spotify Link"
                          type="text"
                          value={userCard.spotify}
                          onChange={(e)=> setSpotify(e.target.value)}
                        />):
                        (<Input
                          placeholder="Spotify Link"
                          type="text"
                          onChange={(e)=> setSpotify(e.target.value)}
                        />)
                        }
                      </FormGroup>
                    </Col>
                    <Col className="px-3" md="12">
                      <FormGroup>
                        <label>Twitter</label>
                        {userCard.twitter ?
                        ( <Input
                          placeholder="Twitter Link"
                          type="text"
                          value={userCard.twitter}
                          onChange={(e)=> setTwitter(e.target.value)}
                        />):
                       ( <Input
                          placeholder="Twitter Link"
                          type="text"
                          onChange={(e)=> setTwitter(e.target.value)}
                        />)
                       }
                      </FormGroup>
                    </Col>
                    <Col className="px-3" md="12">
                      <FormGroup>
                        <label>LinkedIn</label>
                        {userCard.linkedin ?
                        ( <Input
                          placeholder="LinkedIn Link"
                          type="text"
                          value={userCard.linkedin}
                          onChange={(e)=> setLinkedIn(e.target.value)}
                        />):
                       ( <Input
                          placeholder="LinkedIn Link"
                          type="text"
                          onChange={(e)=> setLinkedIn(e.target.value)}
                        />)
                       }
                      </FormGroup>
                    </Col>
                    
                    <Col className="px-3" md="6">
                    <FormGroup>
                        <Label for="Mode">Mode</Label>
                        {userCard.mode?
                        (<Input
                            type="select"
                            name="mode"
                            id="mode"
                            value={userCard.mode}
                            onChange={(e) => setMode(e.target.value)}
                        >
                            <option value="Default">Default</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Youtube">Youtube</option>
                            <option value="Spotify">Spotify</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Instagram">Instagram</option>
                        </Input>):
                        (<Input
                            type="select"
                            name="mode"
                            id="mode"
                            value={mode}
                            onChange={(e) => setMode(e.target.value)}
                        >
                            <option value="Default">Default</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Youtube">Youtube</option>
                            <option value="Spotify">Spotify</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Instagram">Instagram</option>
                        </Input>)
                    }
                    </FormGroup>
                    </Col>
                  
                    <Col className="px-3" md="6">
                    <FormGroup>
                        <Label for="Theme">Theme</Label>
                        {userCard.theme?
                        (<Input
                            type="select"
                            name="theme"
                            id="theme"
                            value={
                              userCard.theme === '#333333'
                                ? 'Dark'
                                : userCard.theme === '#f2f2f2'
                                ? 'Light'
                                : userCard.theme === '#adebad'
                                ? 'Green'
                                : userCard.theme === '#99b3ff'
                                ? 'Blue'
                                : userCard.theme === '#ffd9cc'
                                ? 'Red'
                                : 'Default' 
                            }
                            onChange={(e) => setTheme(e.target.value)}
                        >
                            <option style={{backgroundColor:'#333333',color:'white', padding:'0.5em 0em', margin:'0.8em 0em'}} value="#333333">Dark </option>
                            <option style={{backgroundColor:'#f2f2f2',color:'black', padding:'0.5em 0em', margin:'0.8em 0em'}}  value="#f2f2f2">Light </option>
                            <option style={{backgroundColor:'#adebad',color:'black', padding:'0.5em 0em', margin:'0.8em 0em'}}  value="#adebad">Green </option>
                            <option style={{backgroundColor:'#99b3ff',color:'black', padding:'0.5em 0em', margin:'0.8em 0em'}} value="#99b3ff">Blue </option>
                            <option style={{backgroundColor:'#ffd9cc',color:'black', padding:'0.5em 0em', margin:'0.8em 0em'}} value="#ffd9cc">Red </option>
                        </Input>):
                        (<Input
                            type="select"
                            name="theme"
                            id="theme"
                            value={theme}
                            onChange={(e) => setTheme(e.target.value)}
                        >
                            <option style={{backgroundColor:'#333333',color:'white', padding:'0.5em 0em', margin:'0.8em 0em'}} value="#333333">Dark </option>
                            <option style={{backgroundColor:'#f2f2f2',color:'black', padding:'0.5em 0em', margin:'0.8em 0em'}}  value="#f2f2f2">Light </option>
                            <option style={{backgroundColor:'#adebad',color:'black', padding:'0.5em 0em', margin:'0.8em 0em'}}  value="#adebad">Green </option>
                            <option style={{backgroundColor:'#99b3ff',color:'black', padding:'0.5em 0em', margin:'0.8em 0em'}} value="#99b3ff">Blue </option>
                            <option style={{backgroundColor:'#ffd9cc',color:'black', padding:'0.5em 0em', margin:'0.8em 0em'}} value="#ffd9cc">Red </option>
                        </Input>)}
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
                        Update Profile
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
