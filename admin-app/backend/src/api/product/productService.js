const product = require('./product')

product.methods(['get', 'post', 'put', 'delete'])
product.updateOptions({new: true, runValidators: true})

module.exports = product