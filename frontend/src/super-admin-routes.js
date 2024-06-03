import React from 'react';
import Dashboard from "views/super-admin/Dashboard.js";
import Admins from 'views/super-admin/Admins';
import Logout from 'views/Logout';

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/super-admin",
  },
  {
    path: "/admins",
    name: "Admins",
    icon: "fa-solid fa-layer-group",
    component: <Admins />,
    layout: "/super-admin",
  },
  {
    path: "/logout",
    name: "Logout",
    icon: "fas fa-sign-out-alt",
    component: <Logout />,
    layout: "/user",
  },
 
];
export default routes;