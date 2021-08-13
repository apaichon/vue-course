const path = require('path');
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize', '', '', {
  dialect: 'sqlite',
  storage: path.join(__dirname,'db', 'db.sqlite'),
  logging: false
});

// Create an Express compatible Feathers application instance.
const app = express(feathers());
var cors = require('cors')
var corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

app.set("sequelizeClient", sequelize);

const services = require("./services");
const initSchema = require("./db/init") 

// Turn on JSON parser for REST services
app.use(express.json());
// Turn on URL-encoded parser for REST services
app.use(express.urlencoded({ extended: true }));

app.configure(initSchema);
// Enable REST services
app.configure(express.rest());
// Enable Socket.io services
app.configure(socketio());
app.configure(services);
app.use(express.errorHandler());

// Start the server
const port = 3030;

app.listen(port, () => {
  console.log(`Feathers server listening on port ${port}`);
});