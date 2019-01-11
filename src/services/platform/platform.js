
import _ from 'lodash';

import * as request from 'utils/request';
import { PLATFORM_API_URL } from 'config/platform';


export const signup = (userProps) => {
    return request.post(`${PLATFORM_API_URL}/signup`, userProps)
        .then(response => {
            return response.data;
        })
        .catch(payload => {

            console.log(payload.response);

            const detail = _.get(payload, "response.data.errors", {});

            console.log(detail);

            throw new request.ServerError({message: payload, detail: detail});
        });
}

export const login = (userProps) => {
    return request.post(`${PLATFORM_API_URL}/login`, userProps)
        .then(response => {
            return response.data;
        })
        .catch(payload => {
            const detail = _.get(payload.response.data.errors, {});
            throw new request.ServerError({message: payload, detail: detail});
        });
}