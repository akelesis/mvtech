const app = require('express')()
const consign = require('consign')

consign()
.then('./api')
.then('./config/routes.js')
.into(app)

app.listen(3001, () => {
    console.log("Backend executando")
})