const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.json({ result: 'Hello World' })
})

// controllers middleware
router.use('/api', require('../controllers/controller'))
router.use(require('../controllers/get-token'))

module.exports = router