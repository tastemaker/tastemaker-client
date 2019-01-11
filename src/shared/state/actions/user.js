
import { push } from 'connected-react-router';

import platform from 'services/platform';
import {
    SET_ACCESS_TOKEN,
    SET_USER_AUTH_ERRORS
} from '../action-constants/user';


export const setAccessToken = token => ({
    type: SET_ACCESS_TOKEN,
    payload: token,
});

export const setUserAuthErrors = errors => ({
    type: SET_USER_AUTH_ERRORS,
    payload: errors,
});

export const registerUser = (userProps) => (dispatch, getState) => {
    return platform.signup(userProps).then(payload => {
        dispatch(setAccessToken(payload.token));
        dispatch(push('/'));
    }).catch(error => {
        dispatch(setUserAuthErrors(error.toJSON()));
    });
}

export const loginUser = (userProps) => (dispatch, getState) => {
    return platform.login(userProps).then(payload => {
        dispatch(setAccessToken(payload.token));
        dispatch(push('/'));
    }).catch(error => {
        dispatch(setUserAuthErrors(error.toJSON()));
    });
}