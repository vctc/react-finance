/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute component={Home} path="/" exact restricted={false} />
        <PrivateRoute component={Dashboard} path="/dashboard" exact />
        <PublicRoute
          exact
          component={Signin}
          path="/signin"
          restricted={true}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
