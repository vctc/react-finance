/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../Utils/CheckLogin';

const PublicRoute = ({ component: Component, restricted, ...meow }) => {
  console.log('data', isLogin());
  console.log('restricted', restricted);

  return (
    <Route
      {...meow}
      render={(props) =>
        isLogin() && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
