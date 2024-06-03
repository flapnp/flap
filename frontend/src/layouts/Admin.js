
import React, {useState,useEffect} from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import axios from "axios";
import routes from "routes.js";

var ps;

function Dashboard(props) {
  // eslint-disable-next-line
  const [sucess,setSucess] =useState()
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
 useEffect(() => {
    axios.get('http://localhost:3001/admin')
      .then(res => {
        if (res.data === "User Dashboard") {
          setSucess("User Dashboard");
        } else if (res.data === "Admin Dashboard") {
          setSucess("Admin Dashboard");
        } else if (res.data === "Super Admin Dashboard") {
          setSucess("Super Admin Dashboard");
        }  else {
          // If the response is not recognized, redirect to a default route
          setSucess(null);
        }
      })
      .catch(err => {
       console.log('Error fetching dashboard data:', err);
       // Redirect to default route on error
       navigate('/');
   });
  }, [navigate]);
  // const [backgroundColor, setBackgroundColor] = React.useState("black");
  // const [activeColor, setActiveColor] = React.useState("info");
  const mainPanel = React.useRef();
  const location = useLocation();
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });
  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);
  // const handleActiveClick = (color) => {
  //   setActiveColor(color);
  // };
  // const handleBgClick = (color) => {
  //   setBackgroundColor(color);
  // };
  return (
    <div className="wrapper">
      <Sidebar
        {...props}
        routes={routes}
        // bgColor={backgroundColor}
        // activeColor={activeColor}
      />
      <div className="main-panel" ref={mainPanel}>
        <Navbar {...props} />
        <Routes>
          {routes.map((prop, key) => {
            return (
              <Route
                path={prop.path}
                element={prop.component}
                key={key}
                exact
              />
            );
          })}
        </Routes>
        <Footer fluid />
      </div>
      {/* <FixedPlugin
        bgColor={backgroundColor}
        activeColor={activeColor}
        handleActiveClick={handleActiveClick}
        handleBgClick={handleBgClick}
      /> */}
    </div>
  );
}

export default Dashboard;
