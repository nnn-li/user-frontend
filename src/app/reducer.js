import { combineReducers } from 'redux';

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
        });
    case 'SIGNUP':
        return Object.assign({}, state, {
            isFetching: false,
        });
    case 'ERROR':
        return Object.assign({}, state, {
            isFetching: false,
            error: action.error,
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
    test,
    user,
});

export default rootReducer;
