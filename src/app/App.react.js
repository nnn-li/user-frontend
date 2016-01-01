import React from 'react';
import store from './store.js';
import Login from './components/Login.react.js';

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
            <div className="content xy-center dark3-bg white-color">
                <Login>
                </Login>
            </div>
       );
    },

});

export default App;
