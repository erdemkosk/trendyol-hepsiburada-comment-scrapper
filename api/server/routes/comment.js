const router = require('express').Router();
const { celebrate } = require('celebrate');

const {
  getComments,
} = require('../controllers/comment');
const schemas = require('../../validator/comments');

/**
 * This function comment is parsed by doctrine
 * @route GET /comment/
 * @group comment - About comment operations
 * @param {string} product.query.required iphone 11
 * @returns {object} 200 - returning Foo from Fooes
 * @returns {Error}  default - Unexpected error
 */

router.get('/', celebrate(schemas.getComments), getComments);

module.exports = router;
