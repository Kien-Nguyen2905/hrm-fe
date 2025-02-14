require('dotenv').config();

module.exports = {
  apps: [
    {
      name:
        process.env.NODE_ENV === 'production'
          ? process.env.PRODUCTION_NAME
          : process.env.DEVELOPMENT_NAME,
      script: 'npm run start',
      env: {
        NODE_ENV: 'development',
        PORT: process.env.DEVELOPMENT_PORT || 3000,
        NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: process.env.PRODUCTION_PORT || 3002,
        NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT_PROD,
      },
    },
  ],
};
