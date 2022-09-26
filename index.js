const express = require('express')
const app = express()
const Router = require('./src/config/app')
const connection = require('./src/database/connection')

const PORT = 8090

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

Router(app)

connection
    .authenticate()
    .then(() => console.log('Connected with database'))
    .catch(err => console.log(err))

app.listen(PORT , () => console.log(`Server is running on port ${PORT}`))