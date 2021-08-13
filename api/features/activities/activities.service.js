const { activities } = require('./activities.class');
const createModel = require('./activities.model');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/activities', new activities(options, app));
};