require('dotenv').config();
const Server = require('./src/server.js')
const RepositoryConnection = require('./src/repositories/repository-connection');

(async () => {
    await RepositoryConnection.initRepository()
    await Server.initServer()
})()