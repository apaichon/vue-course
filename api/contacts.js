module.exports = function (app) {
  var MongoClient = require('mongodb').MongoClient
  var dbUrl = 'mongodb://127.0.0.1:27017/membership'
  var ObjectID = require('mongodb').ObjectID

  app.post('/contacts/add', (req, res) => {
    MongoClient.connect(dbUrl, (err, db) => {
      if (err) {
        res.send(err)
      }
      let id = new ObjectID()
      let data = req.body
      console.log('body', req.body)
      data['_id'] = id.toHexString()
      db.collection('contacts')
      .insertOne(data, (err, result) => {
        db.close()
        if (err) {
          res.send(err)
        } else {
          res.send(result)
        }
      })
    })
  })
}
