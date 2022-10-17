const router = require('express').Router();
const { celebrate } = require('celebrate');
const auth = require('../../middleware/authentication');

const {
  login,
  register,
  getUser,
} = require('../controllers/user');

const schemas = require('../../validator/user');

/**
 * This function comment is parsed by doctrine
 * @route GET /user/
 * @group user - About user operations
 * @returns {object} 200 - returning User from Users
 * @returns {Error}  default - Unexpected error
 */

router.get('/', auth.checkToken, celebrate(schemas.getUser), getUser);

/**
 * @typedef Login
 * @property {string} email.body.required -  email - eg: user@domain.com
 * @property {string} password.body.required - user's password - eg: pass
 */
/**
 * This function comment is parsed by doctrine
 * @route POST /user/login
 * @group user - About user operations
 * @param {Login.model} login.body.required
 * @returns {object} 200 - Try to login system and get auth token
 * @returns {Error}  default - Unexpected error
 */

router.post('/login', celebrate(schemas.login), login);

/**
 * @typedef Register
 * @property {string} nameSurname.body.required - user name and surname - eg: name surname
 * @property {string} email.body.required - user email - eg: user@domain.com
 * @property {string} password.body.required - user's password - eg: pass
 */
/**
 * This function comment is parsed by doctrine
 * @route POST /user/register
 * @group user - About user operations
 * @param {Register.model} register.body.required
 * @returns {object} 200 - Try to register system so create a uniq user
 * @returns {Error}  default - Unexpected error
 */

router.post('/register', celebrate(schemas.register), register);

module.exports = router;
