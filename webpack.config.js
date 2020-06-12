const baseConfig = require('./config/base.config.ts');
const serverConfig = require('./config/server.config.ts');

const config = {
  ...serverConfig,
  ...baseConfig,
};

module.exports = config;
