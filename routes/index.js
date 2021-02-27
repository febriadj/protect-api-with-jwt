"use strict"

const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.json({ result: 'Hello World' })
})

// controllers middleware
router.use(require('../controllers/get-ebooks'))
router.use(require('../controllers/get-token'))

module.exports = router