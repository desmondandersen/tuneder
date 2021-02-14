import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from './components/Home.js';
import Login from './components/Login.js';
import CreateAccount from './components/CreateAccount.js';

export default function Routes(){
    return(
        <Switch>
            <Route exact path = '/'>
                <Home/>
            </Route>
            <Route exact path = '/login'>
                <Login/>
            </Route>
            <Route exact path = '/create_account'>
                <CreateAccount/>
            </Route>
        </Switch>
    )
}
