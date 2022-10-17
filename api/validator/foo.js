const { Joi, Segments } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);

const schemas = {
  getFoo: {
    [Segments.QUERY]: {
      id: Joi.objectId().required(),
    },
  },
};

module.exports = schemas;
