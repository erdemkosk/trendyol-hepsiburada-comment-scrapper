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
  FooNotFound: {
    parentError: NotFoundError,
    message: 'Foo not found.',
    languages: {
      en: 'Foo not found.',
      tr: 'Foo bulunamadı.',
    },
    code: 1000,
  },
  UserNotFoundOrWrongParameter: {
    parentError: NotFoundError,
    message: 'User not found or wrong parameter.',
    code: 1001,
  },
  UserAlreadyCreated: {
    parentError: NotFoundError,
    message: 'User already created.',
    code: 1003,
  },
  UserCannotCreated: {
    parentError: NotFoundError,
    message: 'User cannot created.',
    code: 1004,
  },
};
