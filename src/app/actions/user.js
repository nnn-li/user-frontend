import config from '../config.js';
import axios from 'axios';
import { pushPath } from 'redux-simple-router';

function errorHandler(error) {
    return {
        type: 'ERROR',
        error,
    };
}

function signupSuccessHandler(res) {
    return {
        type: 'SIGNUP',
        data: res.data,
    };
}

function loginSuccessHandler(res) {
    return {
        type: 'LOGIN',
    };
}

function fetchingUser() {
    return {
        type: 'FETCHING',
    };
}

function checkFormData(formData) {
    for (let key in formData) {
        if (!formData[key]) {
            return 'Must provide all fields.';
        }
    }

    const emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
    if (!emailRegex.test(formData.username)) {
        return 'Must provide properly formatted email';
    }

    if (formData.password.length < 6) {
        return 'Password must have at least 6 characters.';
    }

    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
        return 'Password must match.';
    }
}

module.exports = {

    clearError() {
        return {
            type: 'CLEAR_ERROR',
        };
    },

    login(params) {
        return dispatch => {
            dispatch(fetchingUser());
            const formData = params.formData;

            const errorString = checkFormData(formData);
            if (errorString) {
                return dispatch(errorHandler(errorString));
            }

            return axios.post(config.serverUrl + '/authenticate', formData)
            .then(res => {
                dispatch(loginSuccessHandler(res));
            })
            .catch(e => {
                dispatch(errorHandler(e.data.message));
            });
        };
    },

    signup(params) {
        return dispatch => {
            dispatch(fetchingUser());
            const formData = params.formData;

            const errorString = checkFormData(formData);
            if (errorString) {
                return dispatch(errorHandler(errorString));
            }

            return axios.post(config.serverUrl + '/signup', formData)
            .then(res => {
                dispatch(signupSuccessHandler(res));
                dispatch(pushPath('/default'));
            })
            .catch(e => {
                dispatch(errorHandler(e.data.message));
            });
        };
    },

};
