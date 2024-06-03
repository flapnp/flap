import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import BlueLogo from '../../../flap-blue.jpg';
import WhiteLogo from '../../../flap_white.webp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import '../../../assets/css/style.css';

function Footer({isDarkTheme}) {
  const emailAddress = 'info@flap.com.np';
  const phoneNumber = '9851236760';

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleAddressClick = () => {
    // Use Google Maps URL with the address for navigation
    window.location.href = ` https://maps.app.goo.gl/TaBcMJqCzB1GwcsBA`;
  };

  return (
    <div className={`section-footer ${isDarkTheme? 
      'dark-mode' 
      : 'light-modef'}`}>
      <Container>
        <Row className={`section-footer-text ${isDarkTheme? 
      'darkfont' 
      :'light-font'}`}>
          <Col lg='3'  md={{ span: 12, order: 1 }}>
          {/* <h3 align="center" style={{marginBottom:'1px', fontWeight:'400'}}>About Flap</h3> */}
          <img className='footer-logo' src={isDarkTheme? WhiteLogo: BlueLogo} alt='logo'/>
          
          <p className='footer-text' style={{textAlign:'justify'}}>
           With NFC-enabled technology, 
            Flap allows users to exchange details effortlessly 
            by just a touch on their smartphones.
            Our mission is to redefine connectivity in 
            the digital era, providing a seamless and 
            efficient way for professionals and individuals 
            to connect, network, and make lasting impressions.
          </p>
          
          <div className='footer-icons' style={{display:'flex', justifyContent:'center'}}>
          <Link to="https://www.facebook.com/flapcardofficial" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className= {`footer-icon ${isDarkTheme? 'darkfont' : 'lightfont'}`}/>
          </Link>
          <Link  to="https://www.instagram.com/flapcardnepal/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className= {`footer-icon ${isDarkTheme? 'darkfont' : 'lightfont'}`} />
          </Link>
          <Link  to="https://www.linkedin.com/company/flapcard" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className= {`footer-icon ${isDarkTheme? 'darkfont' : 'lightfont'}`}/>
          </Link>
          </div>
          </Col>
          <Col lg='3'  md={{ span: 12, order: 2 }}>
          <h4 className='foot-head' align="center" >Company</h4><br/>
          <div className='foot-contents'>
          <Link className={`foot-content ${isDarkTheme? 'darkfont' : 'lightfont'}`} to="#s" target="_blank" rel="noopener noreferrer">
            <span >About Us</span> 
          </Link> <br/>
          <Link className={`foot-content ${isDarkTheme? 'darkfont' : 'lightfont'}`} to="#s" target="_blank" rel="noopener noreferrer">
            <span >Products</span> 
          </Link> <br/> 
          <Link className={`foot-content ${isDarkTheme? 'darkfont' : 'lightfont'}`} to="#s" target="_blank" rel="noopener noreferrer">
            <span >Service</span> 
          </Link> <br/>
           <Link className={`foot-content ${isDarkTheme? 'darkfont' : 'lightfont'}`} to="#s" target="_blank" rel="noopener noreferrer">
            <span >Contact</span> 
          </Link> </div><br/>
          </Col>
          <Col lg='3'  md={{ span: 12, order: 3 }}>
          <h4 align="center" className='foot-head'>Support</h4><br/>
          <div className='foot-contents'>
          <Link className={`foot-content ${isDarkTheme? 'darkfont' : 'lightfont'}`} to="#s" target="_blank" rel="noopener noreferrer">
            <span >Testimonials</span> 
          </Link> <br/>
          <Link className={`foot-content ${isDarkTheme? 'darkfont' : 'lightfont'}`} to="#s" target="_blank" rel="noopener noreferrer">
            <span >Faqs</span> 
          </Link> <br/> 
          <Link className={`foot-content ${isDarkTheme? 'darkfont' : 'lightfont'}`} to="#s" target="_blank" rel="noopener noreferrer">
            <span >Privacy Policy</span> 
          </Link> <br/>
           <Link className={`foot-content ${isDarkTheme? 'darkfont' : 'lightfont'}`} to="#s" target="_blank" rel="noopener noreferrer">
            <span >Careers</span> 
          </Link> </div><br/>
          </Col>
          <Col lg='3'  md={{ span: 12, order: 4 }}>
          <h4 align="center" className='foot-head'>Get In Touch</h4><br/>
          <div className='foot-contents-touch'>
          <Link className={`foot-content ${isDarkTheme? 'darkfont' : 'lightfont'}`} onClick={handleEmailClick} target="_blank" rel="noopener noreferrer">
            <span > <i class="fa-solid fa-envelope touchicon"></i> info@flap.com.np</span> 
          </Link> <br/>
          <Link className={`foot-content ${isDarkTheme? 'darkfont' : 'lightfont'}`} onClick={handlePhoneClick}target="_blank" rel="noopener noreferrer">
            <span ><i class="fa-solid fa-phone touchicon"></i>9851236760</span> 
          </Link> <br/> 
          <Link className={`foot-content ${isDarkTheme? 'darkfont' : 'lightfont'}`} onClick={handleAddressClick} target="_blank" rel="noopener noreferrer">
            <span ><i class="fa-solid fa-location-dot touchicon"></i>Lazimpat, Kathmandu</span> 
          </Link> <br/>
          </div><br/>
          </Col>
        </Row>
          <hr className={isDarkTheme? 'lighthr': 'darkhr'} />
         
          <Row className={` ${isDarkTheme ? 'darkfont' : 'lightfont'}`}>
           <Col align="center" lg='12'  md={{ span: 12, order: 4 }}>
            <h6>Copyright Ⓒ 2024 FLAP - ALL RIGHTS ARE RESERVED</h6>
            </Col>
          </Row>
      </Container>
    </div>
  )
}

export default Footer
