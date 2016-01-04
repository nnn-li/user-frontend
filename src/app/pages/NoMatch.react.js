import store from '../store.js';
import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Router, Route, Link, IndexRedirect } from 'react-router';

// reference function to unsubscribe from redux store
let unsubscribe;

const NoMatch = React.createClass({

    getInitialState() {
        return store.getState();
    },

    componentDidMount() {
        unsubscribe = store.subscribe(this.onChange);
    },

    componentWillUnmount() {
        if (!unsubscribe) return;
        unsubscribe();
    },

    _onChange() {
        this.setState(store.getState());
    },

    render() {
        const buttonStyle = {
            width: '100%',
            marginTop: '20px',
            padding: '10px',
        };

        return (
            <div className="content xy-center">
                <div className="center">
                    <h2>Page does not exist!</h2>

                    <Link to="/">
                        <button style={buttonStyle} className="blue3-bg">
                            Go home!
                        </button>
                    </Link>
                </div>
            </div>
        );
    },

});

export default NoMatch;
