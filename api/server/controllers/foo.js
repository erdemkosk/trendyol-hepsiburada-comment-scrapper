/* eslint-disable consistent-return */
const { successResponse } = require('../../util/response');

const fooService = require('../services/foo');
const formatter = require('../../formatter/foo');

module.exports = {
  async getFoo(req, res) {
    const { id } = req.query;

    const { foo } = await fooService.getFoo({ id });

    return res.status(200).send(successResponse({ results: formatter({ foo }) }));
  },
};
