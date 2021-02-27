"use strict"

const router = require('express').Router()
const jwt = require('jsonwebtoken')

const user = new Object({
  userroot: 'root',
  passroot: 'root'
})

router.post('/get-token', (req, res, next) => {
  const { username, password } = req.body
  const { userroot, passroot } = user

  if ( userroot !== username || passroot !== password ) return console.log('incorrect username or password')
  
  jwt.sign({ username: username }, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
    res.json({ token })
  })
})

module.exports = router