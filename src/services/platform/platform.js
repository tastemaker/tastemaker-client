
import * as request from 'utils/request';
import { PLATFORM_API_URL } from 'config/platform';


// Juan remove
export const test = () => {
    return request.get(`${PLATFORM_API_URL}/test`)
        .then(() => {})
        .catch(error => {
            console.log(error); // TODO: bugsnag
        });
}

export const signup = (userProps) => {
    return request.post(`${PLATFORM_API_URL}/signup`, userProps)
        .then(response => {
            return response.data;
        })
        .catch(payload => {
            throw new request.ServerError({message: payload, info: payload.response.data.errors});
        });
}

export const login = () => {
    return request.get(`${PLATFORM_API_URL}/login`)
        .then(() => {})
        .catch(error => {
            console.log(error); // TODO: bugsnag
        });
}