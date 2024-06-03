import React from 'react';
import { Container,
         Row, 
         Col, 
         Button
        // Card 
        } from 'reactstrap';
import Banner from '../../../assets/image/Banner2.png';
import LightBanner from '../../../assets/image/Banner2_light.png';
import SettingsIcon from '@mui/icons-material/Settings';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import '../../../assets/css/style.css';

function Carousel({ isDarkTheme }) {
  return (<>
    <div style={{
    height:'100%',
     
     }}
     className={ isDarkTheme? 'carousel-background-dark':'carousel-background-light' }
     >
      <Container fluid>
        <div className='section-carousel'>
          <Row className='justify-content-center'>
            <Col lg='6'  md={{ span: 12, order: 1 }}>
        <div className={isDarkTheme?'section-welcome':'section-welcome-light'}>
          <span className='section-welcome-1'>Welcome to Flap – Where Connections Thrive!</span><br/>
          <span className='section-welcome-2'>Let's flap into the future of networking with ease. Simply tap and connect to thrive in the digital age.</span>
        </div>
        <Row>
          <Col lg='6'  md={{ span: 12, order: 1 }}>
            <Button 
            className={isDarkTheme?'button-order-dark':'button-order-light'}>
              Order Now</Button>
          </Col>
          <Col lg='6'  md={{ span: 12, order: 1 }}>
            <Button 
              className={isDarkTheme?'button-explore-dark':'button-explore-light'}>
              Explore
            </Button>
          </Col>
        </Row>
        </Col>
        <Col lg='6'  md={{ span: 12, order: 2 }}>
        <div className='section-banner'>
            <img 
            src={isDarkTheme? Banner : LightBanner} 
            className='banner-img' 
            alt="Banner"/>
        </div>
        </Col>
        </Row>
        </div>
       
      </Container>
      
      <div className={isDarkTheme?'section-info':'section-info-light'}>
          <Row style={{marginRight: '0px',margin:'auto'}}>
            <Col  lg='6' style={{margin:'auto'}} 
            md={{ span: 12, order: 1 }}
              className="text-center"
            >
            <span className=
              {`section-info-title 
              ${isDarkTheme? 
                'darkfont' 
                : 'lightfont'} 
                text-center`
              }>
              The Future of Networking at Your Fingertips.
              </span><br/>
              <span className=
              {`section-info-text 
              ${isDarkTheme? 
                'darkfont' 
                : 'lightfont'} 
                text-center`
              }> 
              Elevate your networking game with Flap.
            </span>
            </Col>
          </Row>
          <Row className='row-section'  >
            <Col style={{margin:'auto'}} lg='3'  
            md={{ span: 6, order: 1 }}
              className="text-center"
            >
              <Button className= 
              {isDarkTheme? 'info-card text-center':'info-card-light text-center'}>
               <div className={`icon-body-1 
              ${isDarkTheme? 
                'dark-icon' 
                : 'light-icon'} 
                `}> 
               <SettingsIcon style={{fontSize:'3em', marginBottom:'0.2em'}}/>
               </div>
                <br/>
                Beyond Paper
                <p style={{
                  marginTop:'1em',
                  fontSize:'15px',
                  lineHeight:'1.1',
                  fontWeight:'400',
                  fontFamily:'"Roboto Slab", serif',
                  textTransform:'none'
                  }}>
                Revolutionizing Networking in Digital Era
                </p>
              </Button>
            </Col>
            <Col style={{margin:'auto'}} lg='3'  
            md={{ span: 6, order: 2 }}
              className="text-center"
            >
              <Button className= 
              {isDarkTheme? 'info-card text-center':'info-card-light text-center'}>
                <div className={`icon-body-2 
              ${isDarkTheme? 
                'dark-icon' 
                : 'light-icon'} 
                `}>
                  <FormatPaintIcon style={{fontSize:'3em',opacity:1.5, marginBottom:'0.2em'}}/>
                  </div><br/>
                Material Options
                <p style={{
                  marginTop:'1em',
                  fontSize:'15px',
                  lineHeight:'1.1',
                  fontWeight:'400',
                  fontFamily:'"Roboto Slab", serif',
                  textTransform:'none'
                  }}>
                Personalized Touch for Lasting Impressions
                </p>
              </Button>
            </Col>
            <Col style={{margin:'auto'}} lg='3'  
            md={{ span: 6, order: 3 }}
              className="text-center"
            >
              <Button className= 
              {isDarkTheme? 'info-card text-center':'info-card-light text-center'}>
               <div className={`icon-body-3 
              ${isDarkTheme? 
                'dark-icon' 
                : 'light-icon'} 
                `}> 
               <TouchAppIcon style={{fontSize:'3em', marginBottom:'0.2em'}} /> 
               </div> <br/>
                Instant Connectivity
                <p style={{
                  marginTop:'1em',
                  fontSize:'15px',
                  lineHeight:'1.1',
                  fontWeight:'400',
                  fontFamily:'"Roboto Slab", serif',
                  textTransform:'none'
                  }}>
                Tap, Share, Connect – Effortless Connection
                </p>
              </Button>
            </Col>
            <Col style={{margin:'auto'}} lg='3'  
            md={{ span: 6, order: 4 }}
              className="text-center"
            >
              <Button 
              className= {isDarkTheme? 'info-card text-center':'info-card-light text-center'}>
               <div className={`icon-body-4 
              ${isDarkTheme? 
                'dark-icon' 
                : 'light-icon'} 
                `}> 
               <AccessTimeFilledIcon style={{fontSize:'3em',opacity:1, marginBottom:'0.2em'}}/> 
               </div><br/>
                Smooth Experience
                <p style={{
                  marginTop:'1em',
                  fontSize:'15px',
                  lineHeight:'1.1',
                  fontWeight:'400',
                  fontFamily:'"Roboto Slab", serif',
                  textTransform:'none'
                  }}>
                  Simplify networking in the modern digital environment.</p>
              </Button>
            </Col>
          </Row>
        </div></div>

  
    </>
  )
}

export default Carousel
