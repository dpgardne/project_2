const express = require('express');
const router = express.Router();

//connect route to users/index.ejs
router.get('/', (req, res) => {
  res.render('users/index.ejs');
})

//connect route to users/new.ejs
router.get('/new', (req, res) => {
  res.render('authors/new.ejs')
})

module.exports = router;
