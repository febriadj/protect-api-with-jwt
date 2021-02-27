"use strict"

const router = require('express').Router()
const jwt = require('jsonwebtoken')

router.get('/get-token', (req, res, next) => {
  const query = req.query.name

  jwt.sign({ username: query }, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
    res.json({ token })
  })
})

module.exports = router