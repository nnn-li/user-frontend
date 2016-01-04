import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

function test(state = {
    foo: 'bar',
}, action) {
    switch(action.type) {
        case 'TEST':
            debugger;
            return {
                test: 'testing',
            };
        default:
            return state;
    }
}

function user(state = {
    error: undefined,
    isFetching: false,
}, action) {
    switch(action.type) {
    case 'LOGIN':
        return Object.assign({}, state, {
            isFetching: false,
            data: action.data,
        });
    case 'SIGNUP':
        return Object.assign({}, state, {
            isFetching: false,
            data: action.data,
        });
    case 'ERROR':
        return Object.assign({}, state, {
            isFetching: false,
            error: action.error,
        });
    case 'CLEAR_ERROR':
        return Object.assign({}, state, {
            isFetching: false,
            error: undefined,
        });
    case 'FETCHING':
        return Object.assign({}, state, {
            isFetching: true,
        });
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    routing: routeReducer,
    test,
    user,
});

export default rootReducer;
