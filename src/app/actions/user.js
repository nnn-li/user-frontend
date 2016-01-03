import config from '../config.js';
import axios from 'axios';

function signupErrorHandler(error) {
    return {
        type: 'ERROR',
        error,
    };
}

function signupSuccessHandler(res) {
    return {
        type: 'SIGNUP',
    };
}

function signupFetching() {
    return {
        type: 'FETCHING',
    };
}

module.exports = {
    signup(params) {
        return dispatch => {
            dispatch(signupFetching());
            const formData = params.formData;

            for (let key in formData) {
                if (!formData[key]) {
                    return dispatch(signupErrorHandler('Must provide all fields.'));
                }
            }

            const emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
            if (!emailRegex.test(formData.username)) {
                return dispatch(signupErrorHandler('Must provide properly formatted email'));
            }

            if (formData.password.length < 6) {
                return dispatch(signupErrorHandler('Password must have at least 6 characters.'));
            }

            if (formData.password !== formData.confirmPassword) {
                return dispatch(signupErrorHandler('Password must match.'));
            }

            return axios.post(config.serverUrl + '/signup', formData)
            .then(signupSuccessHandler)
            .catch(e => {
                dispatch(signupErrorHandler(e.data.message));
            });
        };
    },
};
