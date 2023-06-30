const express = require('express')
const app = express()

const userRoutes = require('./src/routes/user')

app.use(userRoutes)

module.exports = app;