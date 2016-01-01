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
                {this.renderError()}
                <form action="" onSubmit={this.handleSubmit}>
                    <input className="field"
                        ref="email"
                        type="text"
                        placeholder="Email"/>
                    <input className="field"
                        ref="password"
                        type="password"
                        placeholder="Password"/>
                    <input className="field"
                        ref="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"/>
                    <input className="button"
                        type="submit"
                        value="Signup"/>
                </form>
                <div className="footer">
                    Already have an account? <Link to={'/login'}>Login!</Link>
                </div>
            </div>
        );
    },

    renderError() {
        if (!this.state.error) return;
        return (
            <div className="error">
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
            confirmPassword: findDOMNode(this.refs.confirmPassword).value,
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

        if (formData.password !== formData.confirmPassword) {
            return this.setState({
                error: 'Password must match.',
            });
        }
    },

});

export default Login;
