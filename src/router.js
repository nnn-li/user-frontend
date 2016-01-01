import React from 'react';
import { Router, Route, Link, IndexRedirect } from 'react-router';
import { createHistory } from 'history';
import App from './app/App.react.js';
import Login from './app/components/Login.react.js';
import Signup from './app/components/Signup.react.js';

const history = createHistory();

const router = (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRedirect to="/login" />
            <Route path="login" component={Login}></Route>
            <Route path="signup" component={Signup}></Route>
        </Route>
    </Router>
);

module.exports = router;
