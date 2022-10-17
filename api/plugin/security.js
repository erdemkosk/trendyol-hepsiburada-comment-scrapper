/* eslint-disable func-names */
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const expressWinston = require('express-winston');
const mongoSanitize = require('express-mongo-sanitize');
const limit = require('express-better-ratelimit');
const logger = require('./logger');


module.exports = function (app) {
  app.use(bodyParser.json({ limit: '10kb' }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(helmet());
  app.disable('etag');

  app.use(expressWinston.logger({
    // metaField: null, // this causes the metadata to be stored at the root of the log entry
    // responseField: null, // this prevents the response from being included in the metadata (including body and status code)
    requestWhitelist: ['headers', 'query'], // these are not included in the standard StackDriver httpRequest
    responseWhitelist: ['body'], // this populates the `res.body` so we can get the response size (not required)
    meta: true,
    dynamicMeta: (req, res) => {
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
      if (res) {
        meta.httpRequest = httpRequest;
        httpRequest.status = res.statusCode;
        httpRequest.latency = {
          ms: res.responseTime,
          seconds: Math.floor(res.responseTime / 1000),
        };
        if (res.body) {
          if (typeof res.body === 'object') {
            httpRequest.responseSize = JSON.stringify(res.body).length;
          }
          else if (typeof res.body === 'string') {
            httpRequest.responseSize = res.body.length;
          }
        }
      }
      return meta;
    },
    msg: 'HTTP {{req.method}} {{res.statusCode}} {{req.url}} {{res.responseTime}}ms',
    winstonInstance: logger,
  }));

  app.use(limit({
    duration: 30000, // 30 seconds
    max: 30,
  }));

  app.use(mongoSanitize());
};
