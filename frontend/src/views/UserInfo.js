import React, { useState, useEffect, useCallback } from "react";
import { Card, CardBody, Row } from "reactstrap";
import axios from "axios";
import {
  Link
} from "react-router-dom"
import '../assets/css/style.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useParams } from 'react-router-dom';

function UserInfo() {
    const [profiles, setProfiles] = useState([]);
    const [userCard, setUserCard] = useState([]);
    let { username } = useParams();
    const [theme, setTheme] =useState('');


    const fetchProfile = useCallback(() => {
        axios.get(`http://localhost:3001/user-info/${username}`, { withCredentials: true })
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
      }, [username]);

      const fetchUserCard = useCallback(async () => {
        try {
          const response = await axios.get(`http://localhost:3001/user-info-preview/${username}`, { withCredentials: true });
          console.log("User Card API Response:", response);
          if (response && response.data && response.data.cardData) {
            setUserCard(response.data.cardData);
            console.log("User Card Data:", response.data.cardData);
          } else {
            console.error('Empty response or invalid data received');
          }
        } catch (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            console.error('Error response from server:', error.response.data);
            console.error('Status code:', error.response.status);
          } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
          } else {
            // Something else happened in making the request
            console.error('Error in request:', error.message);
          }
        }
      }, [username]);
      

      useEffect(() => {
          fetchProfile();
          fetchUserCard();
      }, [ fetchProfile, fetchUserCard]);

      // Function to format image paths
      const formatImagePath = (path) => {
        if (typeof path === 'string') {
          return path.split('\\').join('/');
        }
        return ''; // Return empty string for non-string values
      };
      useEffect(() => {
        if(userCard.theme==='#f2f2f2'){
          setTheme('preview-light');
        } else if(userCard.theme==='#333333')
        {
          setTheme('preview-dark');
        } else if(userCard.theme==='#adebad')
        {
          setTheme('preview-green');
        } else if(userCard.theme==='#99b3ff')
        {
          setTheme('preview-blue');
        }else{
          setTheme('preview-red');
        }
        if (userCard.mode === 'Facebook') {
          window.location.href = `https://${userCard.facebook}` 
        }else if(userCard.mode === 'Youtube'){
          window.location.href = `https://${userCard.youtube}` 
        }
        else if(userCard.mode === 'Spotify'){
          window.location.href = `https://${userCard.spotify}` 
        }else if(userCard.mode === 'Twitter'){
          window.location.href = `https://${userCard.twitter}` 
        }else if(userCard.mode === 'Instagram'){
          window.location.href = `https://${userCard.instagram}` 
        }else if(userCard.mode === 'LinkedIn'){
          window.location.href = `https://${userCard.linkedin}` 
        }
      }, [userCard.theme,userCard.mode,userCard.facebook,
        userCard.youtube,userCard.spotify, userCard.twitter,
        userCard.instagram, userCard.linkedin
      ]); 
  return (
    <div>
      <Row >
        {/* {profiles.map(profile => ( */}
            <Card className={`card-user-info ${theme} `} style={{margin:'auto'}}>
              <CardBody style={{ marginBottom:'2em'}}>
                <div className="preview-card">
                <div style={{ position: 'relative', marginBottom: '6em' }}>
                {userCard.cover_pic ? 
                  (<img 
                    src={`http://localhost:3001/${formatImagePath(userCard.cover_pic)}`} 
                    alt="CoverPic" 
                    className="card-cover-pic"
                    style={{ position: 'relative' }}
                  />) :(<div>No Cover Image</div>)
                }
                  <div className="profile-div"  style={{ position: 'absolute', zIndex: 1, marginTop: '-5em' }}>
                  {userCard.profile_pic ? 
                    (<img
                      src={`http://localhost:3001/${formatImagePath(userCard.profile_pic)}`}
                      alt="ProfilePic"
                     className="card-profile-pic"
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
                    <p style={{ marginRight:'2em', 
                    marginLeft:'2em', 
                    textDecoration: 'none',
                    textAlign:'left'
                    }}>
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
                      (<Link rel="noopener noreferrer"
                       to={ `https://${userCard.facebook}` } 
                       target="_blank">
                          <FacebookIcon style={{fontSize:'3em', color:'#1877F2'}}/>
                      </Link>) : ''
                    }
                    {userCard.instagram ?
                      (<Link to={ `https://${userCard.instagram}` }  target="_blank">
                          <InstagramIcon style={{fontSize:'3em', color:'#fccc63 '}}/>
                      </Link>): ''
                    }
                    {userCard.youtube ?
                      (<Link to={ `https://${userCard.youtube}` } target="_blank">
                          <YouTubeIcon style={{fontSize:'3em', color:'#FF0000'}}/>
                      </Link>): ''
                    }
                    {userCard.spotify ?
                    ( <Link to={ `https://${userCard.spotify}` }  target="_blank">
                        <i style={{fontSize:'2.4em',marginTop:'5px',color:'#1db954'}} class="fab fa-spotify"></i>
                      </Link>) : ''
                    }
                    {userCard.twitter ?
                      (<Link to={ `https://${userCard.twitter}` }  target="_blank">
                          <XIcon style={{fontSize:'3em', color:'#000'}} />
                      </Link>):''
                    }
                    {userCard.linkedin ?
                      (<Link to={ `https://${userCard.linkedin}` }  target="_blank">
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
  )
}

export default UserInfo
