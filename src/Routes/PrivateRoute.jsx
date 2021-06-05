/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../Utils/CheckLogin';

const PrivateRoute = ({ component: Component, ...meow }) => (
  <Route
    {...meow}
    render={(props) =>
      isLogin() ? <Component {...props} /> : <Redirect to="/signin" />
    }
  />
);

export default PrivateRoute;
