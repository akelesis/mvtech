const express = require('express')
const app = express()
const consign = require('consign')

const port = 4005

consign()
.then('./config/middlewares.js')
.then('./api')
.then('./config/routes.js')
.into(app)

app.listen(port, () => {
    console.log(port)
})
