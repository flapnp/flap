import React, {useState} from 'react';
import '../../../assets/css/style.css';
import ReactPlayer from 'react-player'
import { Container,
    Row, 
    Col, 
   } from 'reactstrap';
import Dark from '../../../assets/video/dark-review.mp4';
import White from '../../../assets/video/white-review.mp4';
import Ama from '../../../assets/video/ama.mp4';
import Lily from '../../../assets/video/lily.mp4';
import Wood from '../../../assets/image/wood.png';
// import Wood1 from '../../../assets/image/wood1.png';
// import Wood2 from '../../../assets/image/wood2.png';
// import Wood3 from '../../../assets/image/wood3.png';

import Plastic from '../../../assets/image/plastic.png';
// import Black from '../../../assets/image/black.png';
// import Blue from '../../../assets/image/blue.png';
// import Green from '../../../assets/image/green.png';
// import Idea from '../../../assets/image/idea.png'
// import Photography from '../../../assets/image/photography.png';
// import Robot from '../../../assets/image/robot.png';

import Metal from '../../../assets/image/metal.png';
// import Metal1 from '../../../assets/image/metal1.png';
// import Metal2 from '../../../assets/image/metal2.png';


function Product({ isDarkTheme }) {
  // const PlasticOption=[
  //   Plastic,
  //   Black,
  //   Blue,
  //   Green,
  //   Idea,
  //   Photography,
  //   Robot,
  // ];
  // const [currentPlasticImage, setCurrentPlasticImage] = useState(PlasticOption[0]);
  // const handlePlasticImageClick = (newPlasticImage) => {
  //   setCurrentPlasticImage(newPlasticImage);
  // };

  const MetalOption=[
    Plastic,
    Metal,
    Wood
    // Metal1,
    // Metal2,
  ];
  const [currentMetalImage, setCurrentMetalImage] = useState(MetalOption[0]);
  const handleImageMetalClick = (newMetalImage) => {
    setCurrentMetalImage(newMetalImage);
  };

  // const WoodOption=[
  //   Wood,
  //   Wood1,
  //   Wood2,
  //   Wood3,
  // ];
  // const [currentWoodImage, setCurrentWoodImage] = useState(WoodOption[0]);
  // const handleImageWoodClick = (newWoodImage) => {
  //   setCurrentWoodImage(newWoodImage);
  // };

  return (
    <div className={`section-product ${isDarkTheme? 
        'dark-mode' 
        : 'light-mode'}`} style={{height:'100%', paddingBottom:'4em'}}>
      <Container fluid>
        <Row>
            <Col lg='6'  md={{ span: 12, order: 1 }}
           // style={{marginLeft:'5em'}}
            >
            <ReactPlayer
            url={ isDarkTheme? Lily : Ama}
            playing={true}
            loop={true}
            width="100%"
            height="100%"
            controls={false}
            />
            </Col>
            <Col lg='5'  
            md={{ span: 12, order: 1 }}
            className='about-col'
            >
                <h1 className={`about-flap 
                ${isDarkTheme? 
                'darkfont' 
                : 'lightfont'}`} >
                Flap: Redefining Connectivity in the Digital Era
                </h1>
                <p  className={`about-flap-2 
                ${isDarkTheme? 
                'darkfont' 
                : 'lightfont'}`}>
              Flap, from esa innovation, redefines connectivity with 
              NFC-enabled digital business cards, effortlessly 
              exchanging details with a touch on your smartphone. 
              Its cutting-edge features set new benchmarks in 
              networking efficiency for the digital age.
                </p>
            </Col>
            <Col lg='1'  md={{ span: 12, order: 1 }}></Col>
        </Row>
        <Row >
            <Col lg='1'  md={{ span: 12, order: 1 }}></Col>
            <Col lg='5'  md={{ span: 12, order: 1 }}>
                <h1 className={`about-product 
                    ${isDarkTheme? 
                    'darkfont' 
                    : 'lightfont'}`} >
                Discover Our Products
                </h1>
                <p className={`about-product-2 
                ${isDarkTheme? 
                'darkfont' 
                : 'lightfont'}`}>
                    Revolutionizing Networking. Our innovative digital business cards,
                    with NFC technology, offer instant
                    contact sharing. Choose from Plastic, Wood, or Metal 
                    for an elevated networking experience.
                </p>
                <img className='product-card' src={currentMetalImage} alt='plastic'/>
                <Row className="card-option d-flex justify-content-center align-items-center">
                  {MetalOption.map((image, index) => (
                    <div  key={index} >
                       <div onClick={() => handleImageMetalClick(image)}>
                          <img style={{borderRadius:'50%',marginRight:'1em',height:'3em', width:'3em',backgroundImage:'cover'}} src={image} alt={`card ${index + 1}`} />
                        </div>
                    </div>
                  ))}
                  </Row>
            </Col>
            <Col lg='5'  md={{ span: 12, order: 1 }} className='product-col' >
              <ReactPlayer
              url={ isDarkTheme? Dark : White}
              playing={true}
              loop={true}
              width="100%"
              height="100%"
              controls={false}
              />
            {/* <img className='product-card' src={currentPlasticImage} alt='plastic'/>
                <Row className="card-option d-flex justify-content-center align-items-center">
                  {PlasticOption.map((image, index) => (
                    <div key={index}>
                       <div  onClick={() => handlePlasticImageClick(image)}>
                          <img style={{borderRadius:'50%',marginRight:'1em',height:'3em', width:'3em',backgroundImage:'cover'}} src={image} alt={`card ${index + 1}`} />
                        </div>
                    </div>
                  ))}
                  </Row>
                <img className='product-card' src={currentWoodImage} alt='wood'/>
                <Row className="card-option d-flex justify-content-center align-items-center">
                  {WoodOption.map((image, index) => (
                    <div key={index}>
                       <div  onClick={() => handleImageWoodClick(image)}>
                          <img style={{borderRadius:'50%',marginRight:'1em',height:'3em', width:'3em',backgroundImage:'cover'}} src={image} alt={`card ${index + 1}`} />
                        </div>
                    </div>
                  ))} 
                  
                  </Row> */}

            </Col>
            <Col lg='1'  md={{ span: 12, order: 1 }}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Product;
