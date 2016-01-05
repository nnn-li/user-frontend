import store from '../store.js';
import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import styles from './default.css';

// reference function to unsubscribe from redux store
let unsubscribe;

const Default = React.createClass({

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
        return (
            <div className={styles.default + ' debug'}>
                Hello
            </div>
        );
    },

});

export default Default;
