const User = require('./../models/user');
const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

module.exports = class RepositoryConnection {
    constructor() {
        this.connection = null
    }

    static async connect() {
        this.connection = await Mongoose.createConnection(this.getUrl(), { useNewUrlParser: true })
    }

    static async loadCollections() {
        const userSchema = new Schema(User, {strict: false});
                
        userSchema.set('toObject', {
            transform: function (doc, ret) {
                ret.id = ret._id;
                delete ret._id
                delete ret.__v
            }
        });


        module.exports.User = this.connection.model("Users", userSchema, "Users")
    }

    static getUrl() {
        return process.env.StravaUsers || 'mongodb://localhost:27017/StravaUsers';
    }

    static async initRepository() {
        try {
            await this.connect()
            await this.loadCollections()
        } catch (err) {
            console.log(err)
        }
    }
}