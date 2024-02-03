import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ redirectTo = '/', component: Component }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shoudRedirect = !isLoggedIn && !isRefreshing;
  //   const shoudRedirect = !isLoggedIn;

  return shoudRedirect ? <Navigate to={redirectTo} /> : Component;
};
