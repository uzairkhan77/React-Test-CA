import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ element }) => {
  const { user } = useContext(AuthContext);

  return user ? <Navigate to="/login" /> : element;
};

export default ProtectedRoute;
