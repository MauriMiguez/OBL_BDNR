const Repository = require('./repository-connection');

module.exports = class UserRepository {

    constructor() {
        this.usersRepository = Repository.User
    }

    async getAllUsers(){
        return await this.usersRepository.find()
    }

    async getUser(email){
        return await this.usersRepository.findOne({"email" : email})
    }

    async upsertUser(user){
        return await this.usersRepository.findOneAndUpdate(
            {"email" : user.email},
            user,
            {upsert : true, new: true});
    }
}