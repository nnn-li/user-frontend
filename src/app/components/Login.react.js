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
            <div className="login animated fadeInUp">
                <div className="header">
                    <h1>Login</h1>
                </div>
                {this.renderError()}
                <form action="" onSubmit={this.handleSubmit}>
                    <div className="field-wrapper">
                        <i className="fa fa-envelope-o"></i>
                        <input className="field"
                            ref="email"
                            type="text"
                            placeholder="Email"/>
                    </div>
                    <div className="field-wrapper">
                        <i className="fa fa-lock"></i>
                        <input className="field"
                            ref="password"
                            type="password"
                            placeholder="Password"/>
                    </div>
                    <input className="button"
                        type="submit"
                        value="Login"/>
                </form>
                <div className="footer">
                    Don't have an account? <Link to={'/signup'}>Sign up!</Link>
                </div>
            </div>
        );
    },

    renderError() {
        if (!this.state.error) return;
        return (
            <div className="error animated fadeIn">
                {this.state.error}
            </div>
        );
    },

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            error: undefined
        });

        const formData = {
            email: findDOMNode(this.refs.email).value,
            password: findDOMNode(this.refs.password).value,
        };

        for (let key in formData) {
            if (!formData[key]) {
                return this.setState({
                    error: 'Must provide all fields.',
                });
            }
        }

        const emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
        if (!emailRegex.test(formData.email)) {
            return this.setState({
                error: 'Must provide properly formated email.',
            });
        }

        if (formData.password.length < 6) {
            return this.setState({
                error: 'Password must have at least 6 characters.',
            });
        }
    },

});

export default Login;
