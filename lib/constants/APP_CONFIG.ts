const APP_CONFIG = {
    //API Config
    isLoggingEnable: false,
    timeout: 20000,
    useDummyData: false,
    unauthorizedErrorCode: 401,
    HOST: process.env.NEXT_PUBLIC_API_BASE_URL,

    //APP Config
    EMAIL_CONTACT: 'support@hinata.co',
    SITE_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://app.hinata.co',
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://hinata.co',
};

export default APP_CONFIG;
