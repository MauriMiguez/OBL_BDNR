const UsersRepository = require ('../repositories/users-repository')


module.exports = class UsersService {
    constructor() {
        this.usersRepository = new UsersRepository()
    }
    

    async getUsers(){
        let users = await this.usersRepository.getAllUsers();
        let usersToObjet = []
        let i = 0
        users.forEach(user => {
            usersToObjet[i++] = user.toObject()
        });
        return usersToObjet;
    }

    async upsertUser(user){
        let upsertedUser = await this.usersRepository.upsertUser(user);
        return upsertedUser;
    }


    async getUser(email){
        let user = await this.usersRepository.getUser(email);
        return user
    }
}