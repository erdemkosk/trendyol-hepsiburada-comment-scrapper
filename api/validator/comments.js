const { Joi, Segments } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);

const schemas = {
  getComments: {
    [Segments.QUERY]: {
      product: Joi.string().required(),
    },
  },
};

module.exports = schemas;
