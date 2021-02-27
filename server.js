"use strict"

const
  app = require('express')(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  port = process.env.PORT || 3000

// .env configuration
require('dotenv').config({ path: './.env' })

// database
require('./config/db')

// set up middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port, () => console.log('localhost:' + port))