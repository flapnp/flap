import React from 'react';
import Faq from "react-faq-component";
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import FAQImage from '../../../assets/image/faq.png';
import Journey from '../../../assets/image/start.png';

function FAQ({isDarkTheme}) {
 const data = {

    rows: [
        {
            title: "What is Flap?",
            content: `Flap is a digital business card solution that allows users to share their contact information and social media profiles effortlessly using NFC technology.`,
        },
        {
            title: " How does Flap work?",
            content:
                "Flap works by encoding your contact information onto a digital card. Simply tap or scan your Flap card with a compatible smartphone, and your contact details are instantly shared with the recipient.",
        },
        {
            title: " What materials are Flap cards available in?",
            content: `Flap cards are available in three materials: Plastic, Wood, and Metal, allowing users to choose the option that best suits their style and preferences. `,
        },
        {
            title: "Can I customize my Flap card?",
            content: " Yes, you can customize your Flap card with your name, job title, company logo, and other relevant information to reflect your personal brand.",
        },
        {
            title: "How do I update my Flap card?",
            content: `Updating your Flap card is easy. Simply log in to your Flap account, make the necessary changes to your contact information, and sync your card to reflect the updates.`,
        },
        {
            title: " Can I use Flap for personal networking?",
            content:
                " Absolutely! Flap is perfect for both professional and personal networking. Whether you're connecting with colleagues, clients, or friends, Flap makes sharing contact information quick and convenient.",
        },
        {
            title: "  How secure is Flap?",
            content: `Flap takes security seriously and employs encryption technology to protect your data. Additionally, Flap cards do not store any sensitive information directly on the card, ensuring your privacy and security. `,
        },
        {
            title: "Is Flap eco-friendly?",
            content: "Yes, Flap is eco-friendly. By eliminating the need for traditional paper business cards, Flap helps reduce paper waste and supports sustainability efforts.",
        },
       
    ],
};


const styles={
    bgColor: '#',
    // titleTextColor: 'white',
    // titleTextSize: '48px',
    rowTitleColor: isDarkTheme? 'white':'#292e3c',
    rowTitleTextSize: 'medium',
    rowContentColor: 'grey',
    rowContentTextSize: '16px',
    rowContentPaddingTop: '1px',
    rowContentPaddingBottom: '1px',
    rowContentPaddingLeft: '5px',
    rowMarginBottom:'1px',
    rowContentPaddingRight: '50px',
    arrowColor: isDarkTheme? 'white':'#292e3c',
    transitionDuration: "0.7s",
    timingFunc: "ease",
}
const config = {
    animate: true,
    tabFocus: true,
    
};
  return (
    <div className={`section-part-faq ${isDarkTheme? 
        'dark-mode-faq' 
        : 'light-mode-faq'}`}>
    <div className='section-faq'>
            <h1 className={`faq-flap 
            ${isDarkTheme? 
            'darkfont' 
            : 'lightfont'}`} >
            Frequently Asked Questions
            </h1>
            <p  className={`faq-flap-2 
            ${isDarkTheme? 
            'darkfont' 
            : 'lightfont'}`}>
          Redefining Connectivity in the Digital Era
            </p>
        <Container fluid>
         <Row 
         style={{marginRight: '0px',margin:'auto'}}
         >
          <Col  lg='7'  md={{ span: 12, order: 2 }}
            style={{margin:'auto'}}  >
            <img className='faq-image' src={FAQImage} alt='faq'/>
                
        </Col>
        <Col  lg='5'  md={{ span: 12, order: 2 }}
          style={{margin:'auto',borderRadius:'5px'}}  >
          <Faq
              data={data}
              config={config}
              styles={styles}
              className='faq-item'
          /> 
        </Col>
        
        </Row>
        <div className='section-journey-container'>
            <div className='subscribe-container'>
            <h1 className='start-journey'>
            <p style={{color:'#fff', lineHeight: '0.7'}}> Start your </p>
                <p style={{color:'#C75DA3', lineHeight: '0.7'}}>Networking Journey </p> 
                <p style={{color:'#5FC691', lineHeight: '0.7'}}>  with Flap</p></h1>
                <Form className='subscribe-input'>
                <FormGroup>
                <div className='section-journey-flex' >
                    <Input
                    id="Email"
                    name="email"
                    placeholder="Your Email"
                    type="email"
                    className='input-email-journey'
                    />
                    <Button>Subscribe </Button>
                    </div>
                </FormGroup>
                </Form>
        </div>
       
        <div className='section-journey'>
            <img src={Journey} className='section-journey-img' alt='journey' />
        </div>
        </div>
        </Container>
    </div>
        
    </div>
  )
}

export default FAQ
