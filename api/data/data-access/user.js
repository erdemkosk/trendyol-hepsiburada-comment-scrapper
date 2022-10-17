const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = {
  async getUser({ id }) {
    return (
      User
        .findById(mongoose.Types.ObjectId(id))
        .lean()
        .exec()
    );
  },

  async getUserWithEmail({ email }) {
    return (
      User
        .findOne({ email })
        .lean()
        .exec()
    );
  },

  async getUserWithEmailAndPassword({ email, password }) {
    return (
      User
        .findOne({ email, password })
        .lean()
        .exec()
    );
  },

  async createUser({
    email, password, nameSurname, cryptoSalt,
  }) {
    return (
      new User({
        email, password, nameSurname, cryptoSalt,
      }).save({
        lean: true,
      }));
  },
};
