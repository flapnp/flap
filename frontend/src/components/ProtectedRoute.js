// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ role, userRole, path, element }) => {
  if (userRole !== role) {
    // If the user's role doesn't match, redirect to a default route
    return <Navigate to="/" />;
  }

  // If the user's role matches, render the protected route
  return <Route path={path} element={element} />;
};

export default ProtectedRoute;
