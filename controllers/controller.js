const 
  router = require('express').Router(),
  authenticateToken = require('../authentication/auth'),
  randomres = require('randomres'),
  db = require('../config/db')

router.get('/', authenticateToken, (req, res, next) => {
  const sql = 'SELECT * FROM ebooks'
  db.query(sql, (err, result) => new Promise((resolve, reject) => {
    if (err) return reject(err)
    resolve(result)
  })
  .then(result => res.json({ result }))
  .catch(err => console.log(err))
  )
})

router.post('/', authenticateToken, (req, res, next) => {
  const { title, pages, published } = req.body
  const idEbooks = randomres.str({ length: 12 })

  const sql = `INSERT INTO ebooks VALUE ( '${idEbooks}', '${title}', ${pages}, ${published}, null, null )`
  db.query(sql, err => new Promise((resolve, reject) => {
    if (err) return reject(err)
    resolve('data berhasil ditambahkan')
  })
  .then(result => console.log(result))
  .catch(err => console.log(err))  
  )
})

module.exports = router