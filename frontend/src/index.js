import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, 
  Route, 
  Routes, 
 Navigate 
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import MyProfile from "views/Profile"; 
import AdminLayout from "layouts/Admin.js";
import ViewCard from "views/viewCard";
import EditUser from "views/editUser";
import EditOrder from "views/editOders";
import UserLayout from "layouts/UserDashboard";
import Home from "layouts/Home";
import LoginComponent from "views/Login";
import SignupComponent from "views/Signup";
import SuperAdmin from "layouts/SuperAdmin";
import ProductDetails from "views/user/product-details";
import AddProduct from "views/admin/addProduct";
import ProductOrder from "views/user/productOrder";
import CreateCard from "views/admin/createCard";
import AddTestimonial from "views/admin/addTestimonial";
import UserInfo from "views/UserInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<LoginComponent />} />
      <Route path="/signup" element={<SignupComponent />} />
      <Route path="/user-info/:username" element={<UserInfo />} />
      
      <Route path="/super-admin/" element={<SuperAdmin />} />

      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/admin/" element={<Navigate to="/admin/dashboard" replace />} />
      <Route path="/admin/my-profile" element={<MyProfile />} />
      <Route path="/admin/cards/view-card" element={<ViewCard />} />
      <Route path="/admin/users/edit-user" element={<EditUser />} />
      <Route path="/admin/users/edit-order" element={<EditOrder />} />
      <Route path="/admin/products/add-product/" element={<AddProduct />} />
      <Route path="/admin/cards/create-card/" element={<CreateCard />} />
      <Route path="/admin/testimonial/add-testimonial/" element={<AddTestimonial />} />

      <Route path="/user/*" element={<UserLayout />} />
      <Route path="/user/" element={<Navigate to="/user/dashboard" replace />} />
      <Route path="/user/explore-products/details/:productId" element={<ProductDetails />} />
      <Route path="/user/explore-products/product-order" element={<ProductOrder />} />


    </Routes>
  </BrowserRouter>
);
