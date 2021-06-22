module.exports.initServer = async function () {

    const Express = require('express');
    const App = Express();
    const Port = process.env.PORT
    const Url = process.env.BASEURL
    const Router = require('./controllers/router');
    const Cors = require('cors');

    App.use(Cors())
    App.use(Express.urlencoded({ extended: false }))
    App.use(Express.json())
    App.use(Url, Router)
    App.listen(Port, () => {
        console.log(`Server listening on port ${Port}`)
    })
}