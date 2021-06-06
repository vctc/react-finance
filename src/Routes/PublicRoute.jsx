/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PublicRoute = ({ component: Component, restricted, ...meow }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <Route
      {...meow}
      render={(props) =>
        isAuthenticated && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
