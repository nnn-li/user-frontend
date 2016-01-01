import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Router, Route, Link, IndexRedirect } from 'react-router';

const Login = React.createClass({

    getInitialState() {
        return {};
    },

    componentDidMount() {

    },

    componentWillUnmount() {

    },

    render() {
        return (
            <div className="login animated fadeIn">
                <div className="header">
                    <h1>Login</h1>
                </div>
                <form>
                    <input className="field" type="text" placeholder="Email"/>
                    <input className="field" type="password" placeholder="Password"/>
                    <input className="button" type="submit" value="Login"/>
                </form>
                <div className="footer">
                    Don't have an account? <Link to={'/signup'}>Sign up!</Link>
                </div>
            </div>
        );
    },

});

export default Login;
