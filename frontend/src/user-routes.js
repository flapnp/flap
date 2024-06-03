import React from 'react';
import Dashboard from "views/user/Dashboard.js";
import Modes from "views/user/Modes";
import ViewCard from "views/viewCard";
import ExploreProducts from 'views/user/exploreProduct';
import Support from 'views/user/Support';
import Logout from 'views/Logout';
import Preview from 'views/user/Preview';

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/user",
  },
  {
    path: "/explore-products",
    name: "Explore Products",
    icon: "nc-icon nc-app",
    component: <ExploreProducts />,
    layout: "/user",
  },
  {
    path: "/cards",
    name: "My Card",
    icon: "nc-icon nc-credit-card",
    component: <ViewCard />,
    layout: "/user",
  },
  {
    path: "/preview",
    name: "Preview",
    icon: "nc-icon nc-single-02",
    component: <Preview />,
    layout: "/user",
  },
  {
    path: "/modes",
    name: "My Card Modes",
    icon: "fa-solid fa-layer-group",
    component: <Modes />,
    layout: "/user",
  },
  {
    path: "/support",
    name: "Card Support",
    icon: "fas fa-ticket-alt",
    component: <Support />,
    layout: "/user",
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