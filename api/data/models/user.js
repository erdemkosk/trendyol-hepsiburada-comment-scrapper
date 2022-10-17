const mongoose = require('mongoose');


const { Schema } = mongoose;

const UserSchema = new Schema({
  nameSurname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  cryptoSalt: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now() },
},
{ versionKey: false });

const User = mongoose.model('User', UserSchema);
module.exports = User;
