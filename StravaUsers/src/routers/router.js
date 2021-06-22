const Express = require('express');
const Router = Express.Router();
const UsersController = require('../controllers/users-controller');

const userController = new UsersController();

Router.get('/users', (req, res, nxt)=>
    userController.getUsers(req, res, nxt)
)

Router.post('/users', (req, res, nxt)=>
    userController.createUser(req, res, nxt)
)

Router.get('/users/:email', (req, res, nxt)=>
    userController.getUser(req, res, nxt)
)

module.exports = Router