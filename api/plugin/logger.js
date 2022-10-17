const { createLogger, format, transports } = require('winston');

const env = process.env.NODE_ENV || 'development';


const logger = createLogger({
  // change level if in dev environment versus production
  level: env === 'prod' ? 'info' : 'debug',
  format: format.combine(
    format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
    format.json(),
    format.splat(),
    format.colorize(),
    format.printf(info => `<${info.timestamp}> |${info.level}| : ${info.message} - ${JSON.stringify(info.meta) || ''}  `),
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

module.exports = logger;
