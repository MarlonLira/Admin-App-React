const restful = require('node-restful')
const mongoose = restful.mongoose

const productSchema = new mongoose.Schema({
  name: {type: String, require: true},
  amount: {type: Number, require: true},
  price: {type: String, require: true},
  done: {type: Boolean, require: true, default: false},
  createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('product', productSchema)