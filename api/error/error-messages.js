/* eslint-disable no-unused-vars */
const {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
} = require('./base-errors');

module.exports = {
  TokenIsNotValid: {
    parentError: ForbiddenError,
    message: 'Token is not valid.',
    code: 2,
  },
  TokenIsNotSupplied: {
    parentError: ForbiddenError,
    message: 'Token is not supplied.',
    code: 3,
  },
  WarlockError: {
    parentError: NotFoundError,
    message: 'Warlock error.',
    code: 4,
  },
};
