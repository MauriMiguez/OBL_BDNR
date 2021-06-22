var cassandra = require('cassandra-driver');
const { v1: uuidv1 } = require('uuid');

var contactPoints = ['127.0.0.1'];
//,'127.0.0.2','127.0.0.3'

const client = new cassandra.Client({
    contactPoints: contactPoints,
    localDataCenter: 'datacenter1',
    queryOptions: { consistency: cassandra.types.consistencies.any }
});

module.exports = class ActivityRepository {
    constructor() {
    }

    async insertAtivityPhoto(reqBody) {
        var query = `INSERT INTO strava.activity (id, user, date, kudos, comments, title, url, comment)
        VALUES( ${uuidv1()}, '${reqBody.user.toString()}', '${reqBody.date}', 0, {''}, '${reqBody.title}', '${reqBody.url}', '${reqBody.comment}');`

        await client.execute(query)
        
        return "Ok"
    }

    async insertAtivityPost(reqBody) {
        var query = `INSERT INTO strava.activity (id, user, date, kudos, comments, title, text)
        VALUES( ${uuidv1()}, '${reqBody.user.toString()}', '${reqBody.date}', 0, {''}, '${reqBody.title}', '${reqBody.text}');`

        await client.execute(query)
        
        return "Ok"
    }

    async insertManualPhysicalAtivity(reqBody) {
        var query = `INSERT INTO strava.activity (id, user, date, kudos, comments, title, type, duration, distance, photo, description, effort)
        VALUES( ${uuidv1()}, '${reqBody.user.toString()}', '${reqBody.date}', 0, {''}, '${reqBody.title}', '${reqBody.type}', ${reqBody.duration}, ${reqBody.distance}, '${reqBody.photo}', '${reqBody.description}', ${reqBody.effort});`

        await client.execute(query)
        
        return "Ok"
    }

    async insertAutomaticPhysicalAtivity(reqBody) {
        var query = `INSERT INTO strava.activity (id, user, date, kudos, comments, title, type, duration, distance, location, average_speed, cadence, calories)
        VALUES( ${uuidv1()}, '${reqBody.user.toString()}', '${reqBody.date}', 0, {''}, '${reqBody.title}', '${reqBody.type}', ${reqBody.duration}, ${reqBody.distance}, '${reqBody.location}', ${reqBody.average_speed}, ${reqBody.cadence}, ${reqBody.calories});`

        await client.execute(query)
        
        return "Ok"
    }

    async get(user){
        var query = `SELECT * FROM strava.activity WHERE user='${user}';`

        var result = await client.execute(query)
        
        return result.rows
    }

    static async initRepo(){
        client.connect()
        .then(function () {
            var keyspaceQuery = "CREATE KEYSPACE IF NOT EXISTS strava WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};";
            return client.execute(keyspaceQuery);
        })
        .then(function () {
            var tableQuery = `CREATE TABLE IF NOT EXISTS strava.activity (
                                id uuid,
                                user Varchar,
                                date timestamp,
                                kudos int,
                                comments set<text>,
                                title Varchar,
                                url Varchar,
                                comment Varchar,
                                type Varchar,
                                duration Double,
                                distance Double,
                                text Varchar,
                                photo Varchar,
                                description Varchar,
                                effort int,
                                location Varchar,
                                average_speed Double,
                                cadence Double,
                                calories Double,
                                PRIMARY KEY (user, date, id)
                            ) WITH CLUSTERING ORDER BY (date DESC);`
            return client.execute(tableQuery);
        })
        .catch(function (err) {
            console.error('There was an error', err);
            return client.shutdown().then(() => { throw err; });
        });
    }
}