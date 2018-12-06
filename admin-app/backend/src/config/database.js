const mongoose = require('mongoose')
const Url = "mongodb://admin:root1206@ds125684.mlab.com:25684/admin-app";

mongoose.Promise = global.Promise

module.exports = mongoose.connect(Url)