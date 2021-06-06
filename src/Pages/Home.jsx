import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './Logout';
import Signin from './Signin';

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <Signin />;
};

export default Home;
