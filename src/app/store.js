'use strict';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer.js';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore);

// can do local storage stuff here
const defaultState = {};

const store = createStoreWithMiddleware(rootReducer, defaultState);

export default store;
