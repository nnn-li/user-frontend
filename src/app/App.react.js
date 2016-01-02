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
            <div className="content xy-center dark1-bg white-color">
                {this.props.children}
            </div>
       );
    },

});

export default App;
