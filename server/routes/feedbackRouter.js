const express = require('express');
const pool = require('../modules/pool')
const router = express.Router();

router.post('/', (req, res) => {
  console.log('req.body:', req.body);
  pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                VALUES ($1, $2, $3, $4);`, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
    .then(() => {
      console.log('Feedback Created');
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error creating feedback', error)
      res.sendStatus(500);
    })
})

router.get('/', (req, res) => {
  console.log('/feedback GET hit');
  pool.query(`SELECT * FROM "feedback" ORDER BY "date" DESC`)
    .then(results => {
      res.send(results.rows);
    })
    .catch(error => console.log('Error getting feedback list', error))
})

router.delete('/', (req, res) => {
  console.log('/feedback DELETE hit. req.query:', req.query);
  pool.query(`DELETE FROM "feedback"
                WHERE "id"=$1;`, [req.query.id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch(error => console.log('Error deleting item:', error))
})

module.exports = router;