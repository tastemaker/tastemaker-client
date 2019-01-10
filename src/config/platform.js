
export const PLATFORM_API_URL = ((nodeEnv) => {

    const DEFAULT_URL = "http://localhost:3001";

    // Juan remove
    console.log(`Node environment is ${nodeEnv}`);

    switch (nodeEnv) {
        // case 'development':
        //     return 'https://api.dev.tastemaker.com';
        // case 'staging':
        //     return 'https://api.staging.tastemaker.com';
        case 'production':
            return 'https://api.tastemaker.com';
        default:
            return DEFAULT_URL;
    }
})(process.env.NODE_ENV);