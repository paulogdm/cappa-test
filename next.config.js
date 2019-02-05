const development = require('./env/development');
const production = require('./env/production');
const staging = require('./env/staging');
const withSass = require('@zeit/next-sass')

const env = {
  development,
  production,
  staging
}[process.env.NODE_ENV || 'development']

module.exports = withSass({
   // Will be available on both server and client
  publicRuntimeConfig: {
    env
  },

  webpack: (config, options) => {
    // Fixes npm packages that depend on `fs` module
    return config;
  },

  target: 'serverless'
});
