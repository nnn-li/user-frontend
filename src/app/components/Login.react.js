import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

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
            <div className="login">
                <div className="header">
                    <h1>Login</h1>
                </div>
                <form>
                    <input type="text" placeholder="name"/>
                    <input type="text" placeholder="password"/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        );
    },

});

export default Login;
