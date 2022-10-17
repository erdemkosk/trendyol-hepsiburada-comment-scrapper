const mongoose = require('mongoose');
const Foo = require('../models/foo');

module.exports = {
  async getFoo({ id }) {
    return (
      Foo
        .findById(mongoose.Types.ObjectId(id))
        .lean()
        .exec()
    );
  },
};
