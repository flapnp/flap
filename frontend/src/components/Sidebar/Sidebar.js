
import React //,{useState} 
from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import logo from "flap_white.webp";

var ps;

function Sidebar(props) {
  const location = useLocation();
  const sidebar = React.useRef();
  // const[subMenu, setSubmenu]= useState('');
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: true,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color='primary'
      style={{fontWeight:680}}
    >
      <div className="logo">
        <a
          // eslint-disable-next-line no-script-url
          href="Javascript:void(0)"
          className="simple-text logo-mini"
        >
          <div className="logo-img ">
            <img  src={logo} alt="flap-logo" />
          </div>
        </a>
        
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            return (
              <li
                className={
                  activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                }
                key={key}
              >
                <NavLink to={prop.layout + prop.path} className="nav-NavLink">
                  <i className={prop.icon} />
                  <p>{prop.name}</p>
                  {/* {prop.name==='Card'?
                  <p>
                  <p>{prop.name}</p> 
                  <i class="fa-solid fa-chevron-right"></i>
                  </p> :  
                  <p>{prop.name}</p>}
                  {prop.name==='Card'?
                  <>
                  <div 
                  class='submenu' 
                  style={{marginLeft:'2.5em',
                  marginBottom:'-1.7em',
                  marginTop:'0.5em'}}>
                  <i class="fa-solid fa-credit-card"></i>
                  <p style={{
                  marginBottom:'0.7em',
                  }}>Registered Card</p>
                  <i class="fa-solid fa-layer-group"></i>
                  <p>Card Modes</p>
                  </div>
                  </>
                  :''
                  } */}
                 
                </NavLink>
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
