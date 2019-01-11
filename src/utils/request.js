
import axios from 'axios';

let headers = {
    'Content-Type': 'application/json'
};

export const api = axios.create({
    withCredentials: false
});

export function get (url, options) {
    const config = { headers, ...options };
    return api.get(url, config);
}

export function post (url, data) {
    const config = { headers };
    return api.post(url, data, config);
}

export function patch (url, data) {
    const config = { headers };
    return api.patch(url, data, config);
}

export function put (url, data) {
    const config = { headers };
    return api.put(url, data, config);
}

export class ServerError extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, ServerError);

        const [ info ] = args;
        this.info = info;
    }
    toJSON() {
        return this.info;
    }
}