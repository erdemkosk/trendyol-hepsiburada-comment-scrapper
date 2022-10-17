const { ObjectId } = require('mongodb');
const faker = require('faker');

module.exports = [{
  _id: ObjectId('5cece9d5d86a7c699dcd7f12'),
  name: faker.name.findName(),
  createdAt: new Date(),
}];
