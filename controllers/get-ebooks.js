"use strict"

const router = require('express').Router()
const authenticateToken = require('../authentication/auth')

router.get('/api', authenticateToken, (req, res, next) => {
  res.json({ result: 'api' })
})

module.exports = router