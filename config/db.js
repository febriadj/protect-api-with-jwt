"use strict"

const db = require('mysql').createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME
})

db.connect(async err => {
  if (err) return console.log(err)
  
  // create a table with the name ebooks
  // This id field will be filled with a random string ( using the randomres module )
  const tableEbooks = `
    CREATE TABLE IF NOT EXISTS ebooks (
      id CHAR(12) NOT NULL PRIMARY KEY, 
      title VARCHAR(125) NOT NULL,
      pages TINYINT NOT NULL,
      published INT(4) NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    )`

  db.query(tableEbooks, err => err ? console.log(err) : null )
  console.log('mysql connect')
})

module.exports = db