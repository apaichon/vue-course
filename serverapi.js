var express = require('express')
var app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
var session = require('express-session')
app.use(session({secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}
app.use(allowCrossDomain)

app.use(express.static('client'))


app.listen(3000)
console.log('MongoDB for NodeJS Developer is listening to port 3000.')

var MongoClient = require('mongodb').MongoClient
var dbUrl = '' // mongodb://localhost:27017/membership'
var ObjectID = require('mongodb').ObjectID
var co = require('co')

app.post('/login', function (req, res) {
  // MongoClient.connect('mongodb://admin:password@localhost:27017/db',
  dbUrl = `mongodb://${req.body.user}:${req.body.password}@localhost/membership`
  co(function*() {
    var db = yield MongoClient.connect(dbUrl)
    var session = {'user': req.body.user,
      'sessionId': req.session.id,
      'logon': new Date()
    }
    var result = yield db.collection('loginSession').insertOne(session)

    if (result.result.ok === 1) {
      res.send({'statusCode': 200,
        'statusText': 'created session is successfully',
        'sessionId': req.session.id,
        'user': req.body.user
      })
    }
  }).catch((err) => {
    res.send(err)
  })
})

app.post('/contacts/add', function (req, res) {
  MongoClient.connect(dbUrl, function (err, db) {
    if (err) res.send(err)

    var id = new ObjectID()
    var data = req.body
    data['_id'] = id.toHexString()
    db.collection('contacts')
    .insertOne(data, function (err, result) {
      db.close()
      if (err) res.send(err)
      res.send(result)
    })
  })
})

app.get('/contacts/getMany', function (req, res) {
  MongoClient.connect(dbUrl, function (err, db) {
    if (err) res.send(err)
    db.collection('contacts')
    .find(req.query).toArray(function (err, result) {
      db.close()
      if (err) res.send(err)
      res.send(result)
    })
  })
})

app.post('/contacts/getMany', function (req, res) {
  var pageSize = 4
  var currentPage = 1
  var skip = 0

  if (req.body.currentPage) {
    currentPage = req.body.currentPage
  }
  skip = (currentPage - 1) * pageSize
  var condition = req.body.condition

  co(function*() {
    var db = yield MongoClient.connect(dbUrl)
    var collection = db.collection('contacts')
    var totalItems = yield collection.count(condition)
    var result = yield collection.find(condition).skip(skip).limit(pageSize).toArray()
    var totalPages = Math.ceil(totalItems / pageSize)
    res.send({totalPages: totalPages, result: result})
    db.close()
  })
})

app.put('/contacts/update', function (req, res) {
  MongoClient.connect(dbUrl, function (err, db) {
    if (err) res.send(err)
    var opts = (req.body.opts ? req.body.opts : {})
    db.collection('contacts')
    .update(req.body.criteria, req.body.data, opts, function (err, result) {
      db.close()
      if (err) res.send(err)
      res.send(result)
    })
  })
})

app.post('/contacts/delete', function (req, res) {
  MongoClient.connect(dbUrl, function (err, db) {
    if (err) res.send(err)
    db.collection('contacts')
      .remove(req.body, function (err, result) {
        db.close()
        if (err) res.send(err)
        res.send(result)
      })
  })
})
