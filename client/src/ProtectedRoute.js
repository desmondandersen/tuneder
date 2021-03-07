import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import LoginForm from './components/LoginForm.js';

const ProtectedRoute = ({ component: Component, isAuthenticated:isAuthenticated, ...rest }) => {
  console.log(isAuthenticated);
  const finalComponent = isAuthenticated ? Component : LoginForm
  return <Route {...rest} component={finalComponent} />;
};

export default ProtectedRoute;
