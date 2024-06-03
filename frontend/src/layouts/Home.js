import React, {useState}
  from 'react';
import Header from 'components/Home/Navbar/Navbar';
import routes from "home-routes.js";
import '../assets/css/style.css';
import Carousel from 'components/Home/Carousel/Carousel';
import Product from 'components/Home/Product/Product';
import Testimonials from 'components/Home/Testimonials/Testimonials';
import FAQ from 'components/Home/FAQ/FAQ';
import Footer from 'components/Home/Footer/Footer';

function Home(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };
  return (
    <div className='flap-home'>
      <Header {...props}
        routes={routes} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
     <Carousel isDarkTheme={isDarkTheme}/> 
     <Product isDarkTheme={isDarkTheme} />
     <Testimonials isDarkTheme={isDarkTheme}/>
     <FAQ isDarkTheme={isDarkTheme}/>
     <Footer isDarkTheme={isDarkTheme} />
    </div>
  )
}

export default Home
