const Express = require('express');
const Router = Express.Router();
const ActivityController = require('./activity-controller');

var activityController = new ActivityController();

Router.post('/photoActivities', (req, res, nxt) =>
    activityController.postAtivityPhoto(req, res, nxt)
)

Router.post('/postActivities', (req, res, nxt) =>
    activityController.postAtivityPost(req, res, nxt)
)

Router.post('/manualPhysicalActivities', (req, res, nxt) =>
    activityController.postManualPhysicalAtivity(req, res, nxt)
)

Router.post('/automaticPhysicalActivities', (req, res, nxt) =>
    activityController.postAutomaticPhysicalAtivity(req, res, nxt)
)

Router.get('/activities', (req, res, nxt) =>
    activityController.get(req, res, nxt)
)

module.exports = Router