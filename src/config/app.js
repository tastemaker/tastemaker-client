
export const GOOGLE_ANALYTICS_ID = (nodeEnv => {
    switch (nodeEnv) {
        case 'production':
            return 'UA-32679143-1';
        case 'staging':
            return 'UA-39455082-1';
        default:
            return 'UA-39455082-1';
    }
})(process.env.NODE_ENV);

export const AMPLITUDE_ID = (nodeEnv => {
    switch (nodeEnv) {
        case 'production':
            return '850de3965d5604f7f52fb5ae17d541b3';
        case 'staging':
            return 'a94b023469057f88b54ba4c55e716401';
        default:
            return 'a94b023469057f88b54ba4c55e716401';
    }
})(process.env.NODE_ENV);