import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from './components/Home.js';
import Login from './components/Login.js';

export default function Routes(){
    return(
        <Switch>
            <Route exact path = '/'>
                <Home/>
            </Route>
            <Route exact path = '/login'>
                <Login/>
            </Route>
        </Switch>
    )
}
