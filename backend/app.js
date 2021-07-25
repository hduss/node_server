const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

// Require mongoDB connection
const mongoose = require('../loaders/mongoose')


var appDir = path.dirname(require.main.filename);
console.log(appDir)
// Loading routes
const bookRoutes = require('./routes/book')
const userRoutes = require('./routes/user')


// Headers config
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  next()
});

// app.use(bodyParser.json());
// Middleware


app.get('/', (req, res) => {
	res.sendFile(path.join( __dirname, "../frontend/index.html"))
})


// Routes
app.use('/api/book', bookRoutes)
app.use('/api/auth', userRoutes)

module.exports = app