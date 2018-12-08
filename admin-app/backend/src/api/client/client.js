const restful = require('node-restful')
const mongoose = restful.mongoose

const clientSchema = new mongoose.Schema({
  name: {type: String, require: true},
  phone: {type: Number, require: true},
  email: {type: String, require: true},
  done: {type: Boolean, require: true, default: false},
  createdAt: { type: Date, default: Date.now },
})

module.exports = restful.model('Client', clientSchema)