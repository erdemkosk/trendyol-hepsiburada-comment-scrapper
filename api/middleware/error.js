/* eslint-disable no-unused-vars */
let newrelic;

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line global-require
  newrelic = require('newrelic');
}
const { errorResponse } = require('../util/response');
const loggerPlugin = require('../plugin/logger');
const errorMessages = require('../error/error-messages');

module.exports = (err, req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  loggerPlugin.error(err.stack);

  if (!newrelic) {
    newrelic.noticeError(err);
  }


  const errorClass = Object.values(errorMessages).find(error => error.code === err.errorCode);

  return res.status(err.statusCode || 500).json(
    errorResponse(errorClass?.languages?.[req.language] || err.message, err.statusCode || 500, err.errorCode),
  );
};
