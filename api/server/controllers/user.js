
/* eslint-disable consistent-return */
const { successResponse } = require('../../util/response');
const { tokenHelper } = require('../../util/token-helper');

const userService = require('../services/user');
const userFormatter = require('../../formatter/user');

const getUser = async (req, res) => {
  const { userId } = tokenHelper(req);
  const { user } = await userService.getUser({ id: userId });

  return res.status(200).send(successResponse({ results: userFormatter({ user }) }));
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const { user, accessToken } = await userService.login({ email, password });

  return res.status(200).send(successResponse({
    results: userFormatter({ user, accessToken }),
  }));
};

const register = async (req, res) => {
  const { nameSurname, email, password } = req.body;
  const { user } = await userService.register({
    email,
    password,
    nameSurname,
  });

  return res.status(200).send(successResponse({ results: userFormatter({ user }) }));
};

module.exports = {
  login,
  register,
  getUser,
};
