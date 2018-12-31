
import { push } from 'connected-react-router';

import platform from 'services/platform';
import {
    SET_ACCESS_TOKEN,
    SET_USER_SIGNUP_ERRORS
} from '../action-constants/user';


export const setAccessToken = token => ({
    type: SET_ACCESS_TOKEN,
    payload: token,
});

export const setUserSignupErrors = errors => ({
    type: SET_USER_SIGNUP_ERRORS,
    payload: errors,
});

export const registerUser = (userProps) => (dispatch, getState) => {
    return platform.signup(userProps).then(payload => {
        dispatch(setAccessToken(payload.token));
        dispatch(push('/'));
    }).catch(error => {

        console.log("Setting errors!");
        console.log(error.info);

        dispatch(setUserSignupErrors(error.info));
    });
}