const express = require('express')

module.exports = function(server) {
   
    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //product Routes
    const productService = require('../api/product/productService')
    const clienteService = require ('../api/client/clientService')
    const todoService = require ('../api/todo/todoService')
    
    productService.register(router, '/product')
    clienteService.register(router, '/client')
    todoService.register(router, '/todo')
}