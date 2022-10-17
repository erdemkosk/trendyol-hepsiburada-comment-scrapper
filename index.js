const cluster = require('cluster');
const os = require('os');
const ip = require('ip');
const app = require('./main.js');
const config = require('./config');
const logger = require('./api/plugin/logger');
const healthService = require('./api/server/services/health');

require('./api/plugin/mongodb');

if (config.server.clusterEnabled && cluster.isMaster) {
  const cpuCount = os.cpus().length;

  logger.info(`Clusters enabled! Total Cluster Count: ${cpuCount}`);

  for (let index = 0; index < cpuCount; index += 1) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    logger.info(`Worker${worker.process.pid} died`);
    cluster.fork();
  });
}
else {
  healthService.setPid({ workerId: cluster?.worker?.process?.pid || 'main' });

  app.listen(config.server.port, () => (config.swagger.enabled ? logger.info(`Express server is running at: \n - 
    Api: http://${ip.address()}:${config.server.port} \n - Swagger: http://${ip.address()}:${config.server.port}/api-docs`) :
    logger.info(`Express server is running at: \n - Api: http://${ip.address()}:${config.server.port}`)));
}
