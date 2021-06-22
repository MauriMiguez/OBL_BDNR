module.exports.initServer = async function(){
    const Express = require('express')
    const Router = require('./routers/router')
    const Cors = require('cors')

    const app = Express()
    const port = process.env.PORT || 3000
    const baseUrl = process.env.BASEURL || '/'

    app.use(Cors())
    app.use(Express.urlencoded({extended: false}))
    app.use(Express.json())

    app.use(baseUrl, Router)
    
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`)
    });
}