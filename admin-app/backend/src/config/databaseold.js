const MongoClient = require('mongodb').MongoClient;
MongoClient.Promise = global.Promise

const Url = "mongodb://admin:root1206@ds125684.mlab.com:25684/admin-app";

module.exports = MongoClient.connect(Url, (err, client) => {
  if(err) return console.log(err)
  db = client.db('admin-app')
})