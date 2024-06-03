import React, { useState, useEffect, useCallback } from "react";
import { Card, CardBody, Row } from "reactstrap";
import axios from "axios";
import jwt from 'jsonwebtoken';
import {
  Link
} from "react-router-dom"
import '../../assets/css/style.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Preview() {
  const [userData, setUserData] = useState();
  const [profiles, setProfiles] = useState([]);
  const [userCard, setUserCard] = useState([]);

  const fetchProfile = useCallback(() => {
    axios.get(`http://localhost:3001/user/preview/${userData.userId}`, { withCredentials: true })
      .then(response => {
        if (response && response.data) {
          setProfiles(response.data);
          console.log("response", response.data);
        } else {
          console.error('Empty response or invalid data received');
          // Handle the case where response or data is empty or invalid
        }
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
        // Handle API call errors
      });
  }, [userData]);

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
    const token = localStorage.getItem('token') || document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
    if (token) {
      const decoded = jwt.decode(token);
      setUserData(decoded);
    }
  }, []);

  useEffect(() => {
    if (userData) {
      fetchProfile();
      fetchUserCard();
    }
  }, [userData, fetchProfile, fetchUserCard]);
  // Function to format image paths
  const formatImagePath = (path) => {
    if (typeof path === 'string') {
      return path.split('\\').join('/');
    }
    return ''; // Return empty string for non-string values
  };


  return (
    <div className="content">
      <Row >
        {/* {profiles.map(profile => ( */}
            <Card className="card-stats" style={{margin:'auto'}}>
              <CardBody style={{ marginBottom:'2em'}}>
                <div className="preview-card">
                <div style={{ position: 'relative', marginBottom: '6em', width: '300px', height: 'auto' }}>
                {userCard.cardCover ? 
                  (<img 
                    src={`http://localhost:3001/${formatImagePath(userCard.cardCover)}`} 
                    alt="CoverPic" 
                    width="300" 
                    height="auto" 
                    style={{ position: 'relative' }}
                  />) :(<div>No Cover Image</div>)
                }
                  <div style={{ position: 'absolute', zIndex: 1, marginTop: '-5em', left: '75px' }}>
                  {userCard.cardProfile ? 
                    (<img
                      src={`http://localhost:3001/${formatImagePath(userCard.cardProfile)}`}
                      alt="ProfilePic"
                      width="150"
                      height="auto"
                      style={{ borderRadius: '50%' }}
                    />):(<div>No Profile Image</div>)
                  }
                  </div>
                </div>
                <div >
                <div style={{ textAlign: 'center' }}>
                  <h7 style={{ textDecoration: 'none' }}>
                    @{profiles.username}
                  </h7>
                  </div>
                  <br/>
                <p align="center"  
                  style={{fontSize:'18px', 
                  textTransform: 'none', 
                  borderTop:'solid 1px black',
                  borderBottom:'solid 1px black',
                  padding:'0.5em'
                }}>
                    {profiles.firstname} &nbsp;
                    {profiles.middlename? (<div>{profiles.middlename}&nbsp;</div>): ''}
                    {profiles.lastname}
                  </p>
                  <div style={{
                    borderBottom:'solid 1px black',
                    padding:'0.1em',
                   
                  }}>
                  <p style={{ lineHeight:'0.5', marginLeft:'2em', textDecoration: 'none' }}>
                    <i style={{color:'#1a9c00'}} class="fas fa-phone-square-alt"></i>&nbsp;&nbsp;  
                    {profiles.phone}
                  </p>
                  <p style={{ lineHeight:'0.5', marginLeft:'2em', textDecoration: 'none' }}>
                    <i style={{color:'gray'}} class="fas fa-envelope"></i>&nbsp;&nbsp; 
                    {profiles.email}
                  </p>
                  <p style={{ lineHeight:'0.5', marginLeft:'2em', textDecoration: 'none' }}>
                    <i style={{color:'#ffb96e'}} class="fas fa-briefcase"></i>&nbsp;&nbsp; 
                    {profiles.organization}
                  </p>
                  </div>
                  <div style={{
                    borderBottom:'solid 1px black',
                    padding:'1.6em 0em 0.3em 0em',
                  }}>
                  {userCard.bio ?
                    <p style={{  marginLeft:'2em', textDecoration: 'none' }}>
                      {userCard.bio} 
                    </p >
                  :(<p style={{  marginLeft:'2em', textDecoration: 'none' }}>
                    Hello 
                  </p >)
                  }
                  </div>

                  <div style={{
                    borderBottom:'solid 1px black',
                    padding:'1.6em 0em 0.1em 0em',
                  }}>
                  <div style={{display:'flex', justifyContent:'space-around'}}>
                    {userCard.facebook ?
                      (<Link rel="noopener noreferrer" to={ userCard.facebook } target="_blank">
                          <FacebookIcon style={{fontSize:'3em', color:'#1877F2'}}/>
                      </Link>) : ''
                    }
                    {userCard.instagram ?
                      (<Link to={{ pathname: userCard.instagram }} target="_blank">
                          <InstagramIcon style={{fontSize:'3em', color:'#fccc63 '}}/>
                      </Link>): ''
                    }
                    {userCard.youtube ?
                      (<Link to={{ pathname: userCard.youtube }} target="_blank">
                          <YouTubeIcon style={{fontSize:'3em', color:'#FF0000'}}/>
                      </Link>): ''
                    }
                    {userCard.spotify ?
                    ( <Link to={{ pathname: userCard.spotify }} target="_blank">
                        <i style={{fontSize:'2.4em',marginTop:'5px',color:'#1db954'}} class="fab fa-spotify"></i>
                      </Link>) : ''
                    }
                    {userCard.twitter ?
                      (<Link to={{ pathname: userCard.twitter }} target="_blank">
                          <XIcon style={{fontSize:'3em', color:'#000'}} />
                      </Link>):''
                    }
                    {userCard.linkedin ?
                      (<Link to={{ pathname: userCard.linkedin }} target="_blank">
                          <LinkedInIcon style={{fontSize:'3em', color:' #0A66C2'}} />
                      </Link>):''
                    }
                  </div>
                  <br/>  
                  {/* <p style={{ lineHeight:'0.5', marginLeft:'4em',textDecoration: 'none' }}>
                    {userCard.facebook}
                  </p >
                  <p style={{ lineHeight:'0.5', marginLeft:'4em',textDecoration: 'none' }}>
                    {userCard.instagram}
                  </p >
                  <p style={{ lineHeight:'0.5', marginLeft:'4em',textDecoration: 'none' }}>
                    {userCard.youtube}
                  </p >
                  <p style={{ lineHeight:'0.5', marginLeft:'4em',textDecoration: 'none' }}>
                    {userCard.spotify}
                  </p >
                  <p style={{ lineHeight:'0.5', marginLeft:'4em',textDecoration: 'none' }}>
                    {userCard.twitter}
                  </p > */}
                  </div>
                  {/* <p style={{ textDecoration: 'none' }}>
                    {userCard.mode}
                  </p >
                  <p style={{ textDecoration: 'none' }}>
                    {userCard.theme}
                  </p > */}
                  {/* Render other profile data here */}
                </div>
                </div>
              </CardBody>
            </Card>
        {/* ))}  */}
      </Row>
    </div>
  );
}

export default Preview;
