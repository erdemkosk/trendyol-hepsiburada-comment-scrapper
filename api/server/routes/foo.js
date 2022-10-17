const router = require('express').Router();
const { celebrate } = require('celebrate');

const {
  getFoo,
} = require('../controllers/foo');
const schemas = require('../../validator/foo');

/**
 * This function comment is parsed by doctrine
 * @route GET /foo/
 * @group foo - About foo operations
 * @param {string} id.query.required 5ec28e2ae47cce0017b0b65d
 * @returns {object} 200 - returning Foo from Fooes
 * @returns {Error}  default - Unexpected error
 */

router.get('/', celebrate(schemas.getFoo), getFoo);

module.exports = router;
