const server = {
  port: process.env.PORT || 3000,
  clusterEnabled: process.env.CLUSTER_ENABLED || false,
};

module.exports = {
  env: 'prod',
  server,
};
