import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Router, Route, Link, IndexRedirect } from 'react-router';
import store from '../store.js';
import actions from '../actions.js';

let unsubscribe;

const Login = React.createClass({

    getInitialState() {
        return store.getState();
    },

    componentDidMount() {
        unsubscribe = store.subscribe(this._onChange);
    },

    componentWillUnmount() {
        if (!unsubscribe) return;
        store.dispatch(actions.user.clearError());
        unsubscribe();
    },

    _onChange() {
        this.setState(store.getState());
    },

    render() {
        const user = this.state.user;

        return (
            <div className="content xy-center">
                <div className="login animated fadeInUp">
                    <div className="header">
                        <h1>Login</h1>
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

                        {this.renderButton(user)}
                    </form>

                    <div className="footer">
                        Already have an account? <Link to={'/signup'}>Signup!</Link>
                    </div>
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
                    : 'Login';
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
        };

        store.dispatch(actions.user.login({
            formData,
        }));
    },

});

export default Login;
