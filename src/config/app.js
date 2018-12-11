
export const GOOGLE_ANALYTICS_ID = (reactAppEnv => {
    switch (reactAppEnv) {
        case 'prod':
            return 'UA-32679143-1';
        case 'staging':
            return 'UA-39455082-1';
        default:
            return 'UA-39455082-1';
    }
})(process.env.REACT_APP_ENV);

export const AMPLITUDE_ID = (reactAppEnv => {
    switch (reactAppEnv) {
        case 'prod':
            return 'UA-32679143-1';
        case 'staging':
            return 'UA-39455082-1';
        default:
            return 'UA-39455082-1';
    }
})(process.env.REACT_APP_ENV);