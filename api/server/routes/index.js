/* eslint-disable func-names */
const bodyParser = require('body-parser');
const healthRoutes = require('./health');
const commentRoutes = require('./comment');

module.exports = function (app) {
  app.use(bodyParser.json({ limit: '10kb' }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api/health/', healthRoutes);
  app.use('/api/comment/', commentRoutes);
};
