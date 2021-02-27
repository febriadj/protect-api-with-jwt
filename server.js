const
  app = require('express')(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  port = process.env.PORT || 3000
  
// set up middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// .env configuration
require('dotenv').config()

app.use(require('./routes/index'))
app.listen(port, () => console.log('localhost:' + port))