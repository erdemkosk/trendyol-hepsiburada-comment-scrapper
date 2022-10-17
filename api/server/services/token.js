const jwt = require('jsonwebtoken');
const config = require('../../../config');
const {
  TokenIsNotValid,
} = require('../../util/error');

const generateToken = async ({ data, expiresIn }) => {
  const accessToken = jwt.sign({
    data,
  },
  config.jwt.key,
  {
    expiresIn: expiresIn || config.jwt.expires,
  });

  return {
    accessToken,
  };
};

const decodeToken = ({ token }) => {
  let decodedToken;

  jwt.verify(token, config.jwt.key, (err, decoded) => {
    if (err) throw new TokenIsNotValid();
    decodedToken = decoded;
  });

  return {
    tokenData: decodedToken.data,
  };
};

module.exports = {
  generateToken,
  decodeToken,
};
