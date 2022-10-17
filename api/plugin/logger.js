const { createLogger, format, transports } = require('winston');
const Sentry = require('winston-transport-sentry-node').default;
const WinstonCloudWatch = require('winston-cloudwatch');
const discordService = require('../server/services/discord');
const { DISCORD_MESSAGE_TYPES } = require('../constant');
const config = require('../../config');

const env = process.env.NODE_ENV || 'development';

const options = {
  sentry: {
    dsn: config.sentry.dsn,
  },
  level: 'error',
};

const logger = createLogger({
  // change level if in dev environment versus production
  level: env === 'prod' ? 'info' : 'debug',
  format: format.combine(
    format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
    format.json(),
    format.splat(),
    format.colorize(),
    format.printf((info) => {
      if (info.level.includes('error')) {
        discordService.sendMessageToDiscord({ messageType: DISCORD_MESSAGE_TYPES.ERROR, message: info.message });
      }

      return `<${info.timestamp}> |${info.level}| : ${info.message} - ${JSON.stringify(info.meta) || ''}  `;
    }),
  ),
  transports: [
    new transports.Console({
      json: true,
      prettyPrint: obj => JSON.stringify(obj),
    }),
  ],
  dynamicMeta: (req) => {
    const httpRequest = {};
    const meta = {};
    if (req) {
      meta.httpRequest = httpRequest;
      httpRequest.requestMethod = req.method;
      httpRequest.requestUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
      httpRequest.protocol = `HTTP/${req.httpVersion}`;
      // httpRequest.remoteIp = req.ip // this includes both ipv6 and ipv4 addresses separated by ':'
      httpRequest.remoteIp = req.ip.indexOf(':') >= 0 ? req.ip.substring(req.ip.lastIndexOf(':') + 1) : req.ip; // just ipv4
      httpRequest.requestSize = req.socket.bytesRead;
      httpRequest.userAgent = req.get('User-Agent');
      httpRequest.referrer = req.get('Referrer');
    }
    return meta;
  },
});
logger.add(new Sentry(options));

if (process.env.NODE_ENV === 'prod') {
  const cloudwatchConfig = {
    logGroupName: process.env.CLOUDWATCH_GROUP_NAME,
    logStreamName() {
      // Spread log streams across dates as the server stays up
      const date = new Date().toISOString().split('T')[0];
      return `${process.env.CLOUDWATCH_GROUP_NAME}-${process.env.NODE_ENV}-${date}`;
    },
    awsAccessKeyId: process.env.CLOUDWATCH_ACCESS_KEY,
    awsSecretKey: process.env.CLOUDWATCH_SECRET_ACCESS_KEY,
    awsRegion: process.env.CLOUDWATCH_REGION,
    jsonMessage: true,
  };

  logger.add(new WinstonCloudWatch(cloudwatchConfig));
}

module.exports = logger;
