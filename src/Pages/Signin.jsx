/* eslint-disable react/button-has-type */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Signin = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};
export default Signin;
