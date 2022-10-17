/* eslint-disable consistent-return */
const { successResponse } = require('../../util/response');
const healthService = require('../services/health');

module.exports = {
  async getHealthStatus(req, res) {
    const { results } = await healthService.getHealthStatus();

    return res.status(200).send(successResponse({ results }));
  },
};
