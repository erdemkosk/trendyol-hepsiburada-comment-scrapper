const server = {
  port: process.env.PORT || 4000,
  clusterEnabled: process.env.CLUSTER_ENABLED || false,
};

module.exports = {
  env: 'debug',
  log: {
    level: process.env.LOG_LEVEL || 'info',
  },
  server,
};
