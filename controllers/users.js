const express = require('express');
const router = express.Router();
const User = require('../models/users')

//connect route to users/index.ejs
router.get('/', (req, res) => {
  User.find({}, (err, foundUsers) => {
    res.render('users/index.ejs', {
    users: foundUsers
      });
  })
})
//http://localhost:3000/users

//connect route to users/new.ejs
router.get('/new', (req, res) => {
  res.render('users/new.ejs')
})
//http://localhost:3000/users/new

//setup post route for form
router.post('/', (req, res) => {
  User.create(req.body, (err, CreatedUser)=> {
  res.redirect('/users')
  })
})

//connect route to show.ejs
router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    res.render('users/show.ejs', {
      users: foundUser
      })
    })
})

module.exports = router;
