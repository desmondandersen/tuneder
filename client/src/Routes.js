import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import LoginForm from './components/LoginForm.js';
import CreateAccount from './components/CreateAccount.js';
import MusicianForm from './components/MusicianForm.js';
import VenueForm from './components/VenueForm.js';
import PrivateRoute from './components/PrivateRoute.js';


export default function Routes() {
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
      <Route exact path='/my_account'/>
      </Route>
    </Switch>
  );
}
