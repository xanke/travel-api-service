'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/flows/:code/day/:date', controller.flow.date);
  router.get('/flows/:code/latest', controller.flow.latest);
  router.get('/flows/:code/today', controller.flow.today);
};
