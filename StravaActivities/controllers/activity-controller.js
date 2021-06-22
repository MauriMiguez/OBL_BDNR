const ActivityService = require('../services/activity-service');

module.exports = class ErrorController {
    constructor() {
        this.activityService = new ActivityService()
    }

    async postAtivityPhoto(req, res) {
        let requestBody = req.body
        try{
            var value = await this.activityService.createAtivityPhoto(requestBody)
            if (value) {
                res.status(201)
                res.body = { status: 201, message: value }
            } else {
                res.status(400)
                res.body = { status: 400, message: `Invalid Api data` }
            }
        }
        catch(e){
            res.status(400)
            res.body = { status: 400, message:  e.toString() }
        }
        res.send(res.body)
    }

    async postAtivityPost(req, res) {
        let requestBody = req.body
        try{
            var value = await this.activityService.createAtivityPost(requestBody)
            if (value) {
                res.status(201)
                res.body = { status: 201, message: value }
            } else {
                res.status(400)
                res.body = { status: 400, message: `Invalid Api data` }
            }
        }
        catch(e){
            res.status(400)
            res.body = { status: 400, message:  e.toString() }
        }
        res.send(res.body)
    }

    async postManualPhysicalAtivity(req, res) {
        let requestBody = req.body
        try{
            var value = await this.activityService.createManualPhysicalAtivity(requestBody)
            if (value) {
                res.status(201)
                res.body = { status: 201, message: value }
            } else {
                res.status(400)
                res.body = { status: 400, message: `Invalid Api data` }
            }
        }
        catch(e){
            res.status(400)
            res.body = { status: 400, message:  e.toString() }
        }
        res.send(res.body)
    }

    async postAutomaticPhysicalAtivity(req, res) {
        let requestBody = req.body
        try{
            var value = await this.activityService.createAutomaticPhysicalAtivity(requestBody)
            if (value) {
                res.status(201)
                res.body = { status: 201, message: value }
            } else {
                res.status(400)
                res.body = { status: 400, message: `Invalid Api data` }
            }
        }
        catch(e){
            res.status(400)
            res.body = { status: 400, message:  e.toString() }
        }
        res.send(res.body)
    }

    async get(req, res) {
        let requestQuery = req.query
        try{
            var value = await this.activityService.get(requestQuery.user)
            if (value) {
                res.status(200)
                res.body = { status: 200, message: value }
            } else {
                res.status(400)
                res.body = { status: 400, message: `Invalid Api data` }
            }
        }
        catch(e){
            res.status(400)
            res.body = { status: 400, message:  e.toString() }
        }
        res.send(res.body)
    }
}