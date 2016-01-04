import React from 'react';
import store from './store.js';
import Navbar from './components/Navbar.react.js';

const App = React.createClass({

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
        return (
            <div className="app content">
                <Navbar></Navbar>
                {this.props.children}
            </div>
       );
    },

});

export default App;
