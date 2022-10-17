const server = {
  port: process.env.PORT || 3000,
  clusterEnabled: process.env.CLUSTER_ENABLED || false,
};

module.exports = {
  env: 'debug',
  log: {
    level: process.env.LOG_LEVEL || 'info',
  },
  server,
  mongodb: {
    url: process.env.MONGODB_URL || '',
  },
  jwt: {
    key: process.env.JWT_KEY || 'testJwt',
    expires: process.env.JWT_EXPIRES || '3650d',
  },
  sentry: {
    dsn: process.env.SENTRY_DSN || '',
  },
  redis: {
    host: process.env.REDIS_HOST || '',
    port: process.env.REDIS_PORT || 0,
    password: process.env.REDIS_PASSWORD || '',
  },
  rabbitmq: {
    url: process.env.RABBITMQ_URL || '',
    enable: process.env.RABBITMQ_ENABLE || false,
  },
  exporter: {
    enable: process.env.EXPORTER_ENABLE || false,
  },
  discord: {
    enable: process.env.DISCORD_ENABLE || false,
    url: process.env.DISCORD_WEB_HOOK_URL || '',
  },
  newRelic: {
    appName: process.env.NEW_RELIC_APP_NAME || 'Express Boilerplate',
    licenseKey: process.env.NEW_RELIC_LICENSE_KEY || '',
    enabled: (process.env.NEW_RELIC_ENABLED || 'false').trim().toLowerCase() === 'true',
    labels: {
      version: process.env.NEW_RELIC_VERSION || '1.0.0.0',
    },
  },
};
