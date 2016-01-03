import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Router, Route, Link, IndexRedirect } from 'react-router';
import store from '../store.js';
import actions from '../actions.js';

const Login = React.createClass({

    getInitialState() {
        return store.getState();
    },

    componentDidMount() {
        store.subscribe(this._onChange);
    },

    _onChange() {
        this.setState(store.getState());
    },

    render() {
        const user = this.state.user;

        return (
            <div className="signup animated fadeInUp">
                <div className="header">
                    <h1>Signup</h1>
                </div>
                {this.renderError(user)}

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
                    <div className="field-wrapper">
                        <i className="fa fa-lock"></i>
                        <input className="field"
                            ref="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"/>
                    </div>

                    {this.renderButton(user)}
                </form>

                <div className="footer">
                    Already have an account? <Link to={'/login'}>Login!</Link>
                </div>
            </div>
        );
    },

    renderButton(user) {
        const disabled = user.isFetching;

        return (
            <button className="button" type="submit" disabled={disabled}>
                {() => {
                    return (user.isFetching)
                    ? (
                        <i className="fa fa-spinner fa-spin"></i>
                    )
                    : 'Signup';
                }()}
            </button>
        );
    },

    renderError(user) {
        if (!user.error) return;
        return (
            <div className="error animated fadeIn">
                {user.error}
            </div>
        );
    },

    handleSubmit(event) {
        event.preventDefault();

        const formData = {
            username: findDOMNode(this.refs.email).value,
            password: findDOMNode(this.refs.password).value,
            confirmPassword: findDOMNode(this.refs.confirmPassword).value,
        };

        store.dispatch(actions.user.signup({
            formData,
        }));
    },

});

export default Login;
