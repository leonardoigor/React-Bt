const express = require('express')

module.exports = function (server) {
    const router = express.Router()
    server.use('/api', router)

    // TODO ROUTES
    const todoservice = require('../api/todo/todoService')
    todoservice.register(router, '/todos')
}