const express = require('express')

module.exports = function(server) {
   
    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //TODO Routes
    const todoService = require('../api/todo/todoService')
    const clienteService = require ('../api/cliente/clienteService')
    todoService.register(router, '/todos')
    clienteService.register(router, '/cliente')
}