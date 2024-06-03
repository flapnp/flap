import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import logo from '../../../flap_white.webp';
import logo_blue from '../../../flap-blue.jpg';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'; 
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import '../../../assets/css/style.css';

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about-flapcard",
  },
  {
    label: "Product",
    href: "/product-flapcard",
  },
  {
    label: "Tesimonials",
    href: "/testimonials",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#292e3c",
    padding: "0.8em  1em ",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  headerLight: {
    backgroundColor: "white",
    padding: "0.8em 1em",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 600,
    size: "18px",
    marginLeft: "8px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  getStartbutton:{
  background:'#535C91', 
  color:'white',
  marginRight:'3em'
},
}));

export default function Header({ toggleTheme, isDarkTheme }) {
  const { header, headerLight,  menuButton, toolbar, drawerContainer,getStartbutton } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
       
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);
  

  
  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <div style={{display:'flex'}}>
          <img className="home-logo-img" 
            style={{
              height:'1.8em', 
              width:'auto'}}
            src={isDarkTheme ? logo: logo_blue }
            alt="flap-logo" 
          />
          <div 
          style={{
            marginTop:'0.6em'
          }}>
             <span className={isDarkTheme ?'home-link' :'home-link-dark'}> {getMenuButtons()} </span>
          </div>
       </div>
       <div>
       {isDarkTheme ?
       <LightModeOutlinedIcon  
        style={{
          marginRight:'18px',
          color:'#919605',
          fontSize:'1.4em',
          marginTop:'-4px'
        }}
        onClick={toggleTheme}
       />:
       <DarkModeOutlinedIcon 
       style={{
        marginRight:'18px',
        color:'#919605',
        fontSize:'1.4em',
        marginTop:'-4px'
      }}
      onClick={toggleTheme}
     /> }
      
       <RouterLink to='/login' 
          style={{
            color: "inherit",
            textDecoration: "none" ,
            fontFamily: "Open Sans, sans-serif",
            fontSize:'14px',
            fontWeight:'600',
            marginTop:'4px',
            marginRight:'1em',
            cursor:'pointer'
            }}> 
             <PersonOutlineOutlinedIcon 
             className={isDarkTheme ?'home-link login-icon' :'home-link-dark login-icon'}
        style={{
          marginRight:'2px',
          fontSize: "20px",
          marginTop:'-4px'
        }}
       />
           <span className={isDarkTheme ?'home-link' :'home-link-dark'}> LOGIN </span>
        </RouterLink>
        <Button variant="contained"
        component={RouterLink}
        to="/signup" 
        className={getStartbutton}>
          Get Started
        </Button>
      
       </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

      

    return (
      <Toolbar>
        <div >
          <img className="home-logo-img"   
          src={isDarkTheme ? logo: logo_blue } alt="flap-logo" 
          style={{
            marginLeft:'-0.2em',
            fontSize:'0.8em',
            marginRight:'3em',
          }}
          />
        </div>

        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
        {isDarkTheme ?
       <LightModeOutlinedIcon  
        style={{
          marginRight:'18px',
          color:'#919605',
          fontSize:'1.4em',
          marginTop:'-4px'
        }}
        onClick={toggleTheme}
       />:
       <DarkModeOutlinedIcon 
       style={{
        marginRight:'18px',
        color:'#919605',
        fontSize:'1.4em',
        marginTop:'-4px'
      }}
      onClick={toggleTheme}
     /> }
      
       <span 
          style={{
            color: "inherit",
            textDecoration: "none" ,
            fontFamily: "Open Sans, sans-serif",
            fontSize:'16px',
            fontWeight:'600',
            marginTop:'4px',
            marginRight:'1em',
            }}> 
             <PersonOutlineOutlinedIcon  
             className={isDarkTheme ?'home-link' :'home-link-dark'}
        style={{
          marginRight:'4px',
          fontSize: "20px",
          marginTop:'4px'
        }}
       />
    
           <span className={isDarkTheme ?'home-link' :'home-link-dark'}> LOGIN </span>
        </span>
          <MenuIcon style={{fontSize:'1.4em', float:'right'}} />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
           <div style={{marginBottom:'-1em'}}
              >
              <img className="home-logo-img"   
              src={logo_blue} alt="flap-logo" />
            </div>
          <div className={drawerContainer}>{getDrawerChoices()}</div>
          <Link className="drawer-signup" to='/signup'>Sign Up</Link>
        </Drawer>

      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <React.Fragment key={label}>
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
       
        <hr style={{ margin: '0em' }} />
      </React.Fragment>
      );
    });
   
  };



  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className= {isDarkTheme ? header: headerLight } >
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}