module.exports = {
  apps: [
    {
      name: process.env.DEVELOPMENT_NAME || process.env.PRODUCTION_NAME,
      script: 'npm run start',
      env: {
        PORT: process.env.DEVELOPMENT_PORT,
      },
      env_production: {
        PORT: process.env.PRODUCTION_PORT,
      },
    },
  ],
};
