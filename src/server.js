const express = require('express')
const cors = require('cors')

const app = express()
const router = express.Router()
const PORT = process.env.PORT || 5000

router.get('/', cors(), (req, res) => {
  res.json({ message:
  'Welcome! You can access the data using these routes: /movies, /reviews, /theaters, /reviews/:reviewId, /movies/:movieId, /movies/:movieId/theaters, and /movies/:movieId/reviews.'});
})

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} `);
})

module.exports = app