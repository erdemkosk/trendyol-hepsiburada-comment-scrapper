const mongoose = require('mongoose');

const { Schema } = mongoose;

const FooSchema = new Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
},
{ versionKey: false });

const Foo = mongoose.model('Foo', FooSchema);

module.exports = Foo;
