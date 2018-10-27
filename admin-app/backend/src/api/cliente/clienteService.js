const Cliente = require('./cliente')

Cliente.methods(['get', 'post', 'put', 'delete'])
Cliente.updateOptions({new: true, runValidators: true})

module.exports = Cliente