const APP_CONFIG = {
    //API Config
    isLoggingEnable: false,
    timeout: 20000,
    useDummyData: false,
    unauthorizedErrorCode: 401,
    HOST: process.env.NEXT_PUBLIC_API_ENDPOINT,

    //APP Config
    EMAIL_CONTACT: 'support@hinata.co',
    SITE_URL: process.env.NEXT_PUBLIC_APP_ENDPOINT || 'https://hinata.co',
};

export default APP_CONFIG;
