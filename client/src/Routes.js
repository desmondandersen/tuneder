// Import React
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Import components
import Home from './components/Home.js';
import LoginForm from './components/LoginForm.js';
import CreateAccount from './components/CreateAccount.js';
import MusicianForm from './components/MusicianForm.js';
import VenueForm from './components/VenueForm.js';
import VenueInfo from './components/VenueInfo.js';
import MusicianInfo from './components/MusicianInfo.js';
import MyAccount from './components/MyAccount.js';

import ProtectedRoute from './ProtectedRoute.js';

// URL Routes
const Routes = () => {
  let isAuthenticated = sessionStorage.getItem('isAuthenticated')
  if(isAuthenticated == null) {
    isAuthenticated = false;
  }

  return (
    <Switch>
      <ProtectedRoute exact path='/' component={Home} isAuthenticated={isAuthenticated} />
      <Route exact path='/login'>
        <LoginForm />
      </Route>

      <Route exact path='/create-account'>
        <CreateAccount />
      </Route>
      
      <Route exact path='/new-venue'>
        <VenueForm />
      </Route>
      <Route exact path='/new-musician'>
        <MusicianForm />
      </Route>
      <ProtectedRoute exact path='/venue-info' component={VenueInfo} isAuthenticated={isAuthenticated} />
      <ProtectedRoute exact path='/musician-info' component={MusicianInfo} isAuthenticated={isAuthenticated} />
      <ProtectedRoute exact path='/account' component={MyAccount} isAuthenticated={isAuthenticated} />
      <Route render={() => <Redirect to="/login" />} />
    </Switch>
  );
};

export default Routes;
