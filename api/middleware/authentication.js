/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const config = require('../../config');
const {
  TokenIsNotValid, TokenIsNotSupplied,
} = require('../util/error');

const checkToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers.authorization;
  if (token) {
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }
    jwt.verify(token, config.jwt.key, (err, decoded) => {
      if (err) {
        throw new TokenIsNotValid();
      }
      req.decoded = decoded;
      next();
    });
  }
  else {
    throw new TokenIsNotSupplied();
  }
};

module.exports = {
  checkToken,
};
