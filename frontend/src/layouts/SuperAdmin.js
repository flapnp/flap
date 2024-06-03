import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SuperAdmin() {
  // eslint-disable-next-line
    const [sucess,setSucess] =useState()
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3001/super-admin')
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
  return (
    <div>
      SUPER ADMIN
    </div>
  )
}

export default SuperAdmin
