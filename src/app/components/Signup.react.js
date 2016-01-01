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
            <div className="signup animated fadeIn">
                <div className="header">
                    <h1>Signup</h1>
                </div>
                <form>
                    <input className="field" type="text" placeholder="Email"/>
                    <input className="field" type="password" placeholder="Password"/>
                    <input className="field" type="password" placeholder="Confirm Password"/>
                    <input className="button" type="submit" value="Signup"/>
                </form>
                <div className="footer">
                    Already have an account? <Link to={'/login'}>Login!</Link>
                </div>
            </div>
        );
    },

});

export default Login;
