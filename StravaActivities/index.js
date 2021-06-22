require('dotenv').config();
const Server = require('./server');
const Repository = require('./repository/activity-repository');
(async () => {
    try {
        await Repository.initRepo();
        await Server.initServer();
    } catch (err) {
        console.log(`There was a problem initializing the server - ${err} \n stack: ${err.stack}`);
        process.exit(1);
    }
})()