const express = require('express')
const app = express()
const consign = require('consign')
const port = 443

consign()
.then('./config/middlewares.js')
.then('./api')
.then('./config/routes.js')
.into(app)


app.listen(port, function(req, res){
    res.send('alive on' + port)
})
