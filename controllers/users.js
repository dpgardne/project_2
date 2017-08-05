const express = require('express');
const router = express.Router();

//connect route to users/index.ejs
router.get('/', (req, res) => {
  res.render('users/index.ejs');
})
//http://localhost:3000/users

//connect route to users/new.ejs
router.get('/new', (req, res) => {
  res.render('users/new.ejs')
})
//http://localhost:3000/users/new

module.exports = router;
