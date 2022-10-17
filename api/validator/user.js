const { Joi, Segments } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);

const schemas = {
  login: {
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().min(5).required(),
      password: Joi.string().min(6).required(),
    }),
  },
  register: {
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().min(5).required(),
      password: Joi.string().min(6).required(),
      nameSurname: Joi.string().min(4).required(),
    }),
  },
  getUser: {
    [Segments.QUERY]: {
    },
  },
};
module.exports = schemas;
