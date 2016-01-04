import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link, IndexRedirect } from 'react-router';
import { syncReduxAndRouter } from 'redux-simple-router';
import { createHistory } from 'history';
import store from './app/store.js';
import App from './app/App.react.js';
import Login from './app/components/Login.react.js';
import Signup from './app/components/Signup.react.js';
import Default from './app/components/Default.react.js';
import NoMatch from './app/components/NoMatch.react.js';

const history = createHistory();

syncReduxAndRouter(history, store);

function toDefault(nextState, replaceState) {
    const user = store.getState().user;
    if (!user || !user.data) {
        return;
    }
    replaceState({nextPathname: nextState.location.pathname}, '/default');
}

function requireAuth(nextState, replaceState) {
    const user = store.getState().user;
    if (user && user.data) {
        return;
    }
    replaceState({nextPathname: nextState.location.pathname}, '/login');
}

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="login" component={Login} onEnter={toDefault}></Route>
            <Route path="signup" component={Signup} onEnter={toDefault}></Route>
            <Route path="/" component={App}>
                <IndexRedirect to="/login" />
                <Route path="default" component={Default} onEnter={requireAuth}></Route>
            </Route>
            <Route path="*" component={NoMatch}></Route>
        </Router>
    </Provider>
);

module.exports = router;
