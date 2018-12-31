
export const PLATFORM_API_URL = ((platformApiUrl, reactAppEnv) => {
    // For CI testing environment, hardcode a hostname
    // otherwise this will change in every environment and cause
    // snapshots to false negative fail.
    if (process.env.NODE_ENV === 'test') { return 'http://localhost:3001'; }

    if (platformApiUrl) {
        return platformApiUrl;
    }

    if (reactAppEnv) {
        switch (reactAppEnv) {
            case 'dev':
                return 'https://api.dev.tastemaker.com';
            case 'staging':
                return 'https://api.staging.tastemaker.com';
            case 'prod':
                return 'https://api.tastemaker.com';
            default:
                return platformApiUrl;
        }
    }
    return 'http://localhost:3001';
})(process.env.REACT_APP_PLATFORM_API_URL, process.env.REACT_APP_ENV);