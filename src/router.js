import React from 'react';
import { Router, Route, Link, IndexRedirect } from 'react-router';
import { createHistory } from 'history';
import App from './app/App.react.js';

const history = createHistory();

const router = (
    <Router history={history}>
        <Route path="/" component={App}>
        </Route>
    </Router>
);

module.exports = router;
