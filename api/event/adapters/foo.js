/* eslint-disable no-unused-vars */
const { FooEvent } = require('..');

const FooEventHandler = new FooEvent();

FooEventHandler.on('triger', (params) => {
  // eslint-disable-next-line no-console
  console.log(`Foo event trigered${JSON.stringify(params)}`);
});

module.exports = {
  FooEventHandler,
};
