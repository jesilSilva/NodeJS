const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes') // BEST PRACTICES

app.engine('html', require('ejs').renderFile)
app.use(bodyParser.urlencoded({extended: false}))

app.use(routes)

app.listen(3000, () => {
    console.log('teste 3000')
})