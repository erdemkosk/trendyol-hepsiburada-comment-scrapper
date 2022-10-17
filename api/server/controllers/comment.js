/* eslint-disable consistent-return */
const { successResponse } = require('../../util/response');

const commentsService = require('../services/comment');
const formatter = require('../../formatter/comment');

module.exports = {
  async getComments(req, res) {
    const { product } = req.query;

    const {
      hepsiburadaComments,
      trendyolComments,
    } = await commentsService.getComments({ product });

    return res.status(200).send(successResponse({
      results: formatter({
        hepsiburadaComments,
        trendyolComments,
      }),
    }));
  },
};
