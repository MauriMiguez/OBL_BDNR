const UsersService = require('../services/users-service')

module.exports = class UsersController {

    constructor(){
        this.usersService = new UsersService()
    }

    async getUsers(req, res, nxt){
        try {
            let usersResult =  await this.usersService.getUsers()
            res.status(201)
            res.body = usersResult
        } catch (error) {
            res.status(400)
            res.body = { status: 400, message: error.message }
        }
        res.send(res.body)
    }

    async createUser(req, res, nxt){
        try {
            let postData = req.body
            let userResult = await this.usersService.upsertUser(postData)
            res.status(201)
            res.body = userResult
        } catch (error) {
            res.status(400)
            res.body = { status: 400, message: `Failed to insert Users: ` + error.message }
        }
        res.send(res.body)
    }

    async getUser(req, res, nxt){
        try {
            let email = req.params.email
            let usersResult =  await this.usersService.getUser(email)
            if(usersResult){
                res.status(201)
                res.body = usersResult.toObject();
            }else{
                res.status(404)
                res.body = { status: 404, message: 'User not found' }
            }
        } catch (error) {
            res.status(400)
            res.body = { status: 400, message: error.message }
        }
        res.send(res.body)
    }
}