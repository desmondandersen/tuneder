// Import React
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import components
import Home from './components/Home.js';
import LoginForm from './components/LoginForm.js';
import CreateAccount from './components/CreateAccount.js';
import MusicianForm from './components/MusicianForm.js';
import VenueForm from './components/VenueForm.js';
import VenueInfo from './components/VenueInfo.js';
import MusicianInfo from './components/MusicianInfo.js';
import Account from './components/Account.js'

import PrivateRoute from './PrivateRoute.js';

// URL Routes
const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
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
      <PrivateRoute exact path='/account' />
        <Account/>
      </Route>
      <Route exact path='/venue-info'>
        <VenueInfo />
      </Route>
      <Route exact path='/musician-info'>
        <MusicianInfo />
      </Route>
    </Switch>
  );
};

export default Routes;
