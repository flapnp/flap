import React, {useState, useEffect} from 'react';
import '../../../assets/css/style.css';
import { Parallax } from 'react-parallax';
import { CardBody,
         CardTitle,
         Card,
         CardSubtitle,
         CardText
} from 'reactstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
function Testimonials({ isDarkTheme }) {

    const backgroundImageUrl =require('../../../assets/image/testimonialbanner.png');
    const darkbackgroundImageUrl =require('../../../assets/image/testimonialbanner-dark.png');
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,         // Enable autoplay
      autoplaySpeed: 2000, 
    }; 
    const [testimonials, setTestimonials] = useState([]);
  const fetchTestimonials = () => {
    axios.get('http://localhost:3001/admin/testimonial/')
      .then(response => {
        setTestimonials(response.data);
      })
      .catch(error => {
        console.error('Error fetching testimonials:', error);
      });
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);
  const formatImagePath = (path) => {
    if (typeof path === 'string') {
      return path.split('\\').join('/');
    }
    return ''; // Return empty string for non-string values
  };
    return (
    <div>
      <Parallax blur={0} bgImage={isDarkTheme?darkbackgroundImageUrl :backgroundImageUrl} 
      bgImageAlt="testimonial" 
      strength={350} 
      className='testimonial-parallax'
     >
      <Slider {...settings} className='slider-card'>
      {testimonials.map(testimonial => (
        <Card
          className={`testimonial-card 
          ${isDarkTheme? 
            'darkmodecard':
            'lightmodecard'}`}
          style={{
            width: '20rem',
            margin:'auto',
            padding:'1em 2.5em 8em'
          }}
        >
           <div style={{display:'flex', justifyContent:'center', marginBottom:'1em'}}>
          <img
            src={`http://localhost:3001/${formatImagePath(testimonial.photoPath)}`}
            alt="Card Cover"
            width="auto"
            height="150"
            style={{borderRadius:'50%'}}
            />
            </div>
            <CardBody>
              <CardTitle className='testimonial-card-title'  style={{textAlign:'center'}} tag="h5">
              {testimonial.name}
              </CardTitle>
              <CardSubtitle
                className={`mb-2 text-muted  ${isDarkTheme? 
                  'dark-font':
                  'lightfont'}`}
                tag="h6"
                style={{textAlign:'center'}}
              >
               {testimonial.organization}
              </CardSubtitle>
              <CardText className='testimonial-card-text' style={{textAlign:'center'}}>
              {testimonial.testimonials}
              </CardText>
            </CardBody>
          </Card>
          ))} 
          </Slider>
      </Parallax>
    </div>
  );
}

export default Testimonials
