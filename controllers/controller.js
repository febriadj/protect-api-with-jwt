const 
  router = require('express').Router(),
  authenticateToken = require('../authentication/auth'),
  randomres = require('randomres'),
  db = require('../config/db')

// displays all data from the latest update_at
router.get('/', authenticateToken, (req, res, next) => {
  db.query('SELECT * FROM ebooks ORDER BY updated_at DESC', (err, result) => {
    const promise = new Promise((resolve, reject) => {
      if (err) return reject(err)
      resolve(result)
    })

    promise
      .then(result => res.json({ result }))
      .catch(err => console.log(err))
  })
})

router.post('/', authenticateToken, (req, res, next) => {
  const { title, pages, published } = req.body
  const idEbooks = randomres.str({ length: 12 })

  const sql = `INSERT INTO ebooks VALUE ( '${idEbooks}', '${title}', ${pages}, ${published}, null, null )`
  db.query(sql, err => new Promise((resolve, reject) => {
    if (err) return reject(err)
    resolve('data added successfully')
  })
  .then(result => res.json({ result }))
  .catch(err => console.log(err))  
  )
})

router.put('/', authenticateToken, (req, res, next) => {
  const 
    { title, pages, published } = req.body,
    queryStr = req.query.id,
    idEbooks = randomres.str({ length: 12 })

  if (!queryStr) return console.log('empty query')

  const sql = `UPDATE ebooks SET id = ?, title = ?, pages = ?, published = ?, updated_at = null WHERE id = '${queryStr}'`
  db.query(sql, [idEbooks, title, pages, published], err => {
    const promise = new Promise((resolve, reject) => {
      if (err) return reject(err)
      resolve('data update successfully')
    })

    promise
      .then(result => res.json({ result }))
      .catch(err => console.log(err))
  })
})

router.delete('/', authenticateToken, (req, res, next) => {
  const queryStr = req.query.id
  const sql = `DELETE FROM ebooks WHERE id = '${queryStr}'`

  db.query(sql, err => new Promise((resolve, reject) => {
    if (err) return reject(err)
    resolve('data deleted successfully')
  })
  .then(result => res.json({ result }))
  .catch(err => console.log(err))
  )
})

module.exports = router