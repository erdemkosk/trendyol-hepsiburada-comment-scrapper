const server = {
  port: process.env.PORT || 3000,
};

module.exports = {
  env: 'test',
  server,
  sentry: {
    dsn: process.env.SENTRY_DSN || '',
  },
  exporter: {
    enable: false,
  },
  discord: {
    enable: process.env.DISCORD_ENABLE || false,
    url: process.env.DISCORD_WEB_HOOK_URL || '',
  },
  newRelic: {
    appName: process.env.NEW_RELIC_APP_NAME || 'Express Boilerplate',
    enabled: false,
    labels: {
      version: process.env.NEW_RELIC_VERSION || '1.0.0.0',
    },
  },
};
