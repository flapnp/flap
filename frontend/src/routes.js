import React from 'react';
import Dashboard from "views/admin/Dashboard.js";
import UserPage from "views/admin/User.js";
import Card from "views/admin/Card";
import Order from "views/admin/Order";
import Modes from "views/admin/Modes";
import Products from 'views/admin/Product';
import Testimonials from 'views/admin/Testimonials.js';
import Support from 'views/admin/Support';
import Logout from 'views/Logout';
// import Notifications from "views/Notifications.js";
// import Icons from "views/Icons.js";
// import Typography from "views/Typography.js";
// import TableList from "views/Tables.js";
// import Maps from "views/Map.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Products",
    icon: "nc-icon nc-app",
    component: <Products />,
    layout: "/admin",
  },
  {
    path: "/cards",
    name: "Card",
    icon: "nc-icon nc-credit-card",
    component: <Card />,
    layout: "/admin",
  },
  {
    path: "/modes",
    name: "Modes",
    icon: "fa-solid fa-layer-group",
    component: <Modes />,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Registered User",
    icon: "nc-icon nc-single-02",
    component: <UserPage />,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "nc-icon nc-box",
    component: <Order />,
    layout: "/admin",
  },
  {
    path: "/testimonial",
    name: "Testimonial",
    icon: "fas fa-address-card",
    component: <Testimonials />,
    layout: "/admin",
  },
  {
    path: "/support",
    name: "Support Request",
    icon: "fas fa-ticket-alt",
    component: <Support />,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-diamond",
  //   component: <Icons />,
  //   layout: "/admin",
  // },
 
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: <Maps />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: <Notifications />,
  //   layout: "/admin",
  // },

  // {
  //   path: "/tables",
  //   name: "Table List",
  //   icon: "nc-icon nc-tile-56",
  //   component: <TableList />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: <Typography />,
  //   layout: "/admin",
  // },
  {
    path: "/logout",
    name: "Logout",
    icon: "fas fa-sign-out-alt",
    component: <Logout />,
    layout: "/user",
  },
];
export default routes;
