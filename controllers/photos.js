const express = require('express');
const router = express.Router();
const Photo = require('../models/photos')
//require users model
const User = require('../models/users.js')

//connect route to users/index.ejs
router.get('/', (req, res) => {
  Photo.find({}, (err, foundPhotos) => {
    res.render('photos/index.ejs', {
    photos: foundPhotos
      });
  })
})
//http://localhost:3000/photos

//connect route to users/new.ejs
//edit get route 
router.get('/new', (req, res) => {
  User.find({}, (err, allUsers) => {
  res.render('photos/new.ejs', {
    users: allUsers
    //users is what we will use in views/photos/new.ejs
  })
})
})
//http://localhost:3000/users/new

//setup post route for form
router.post('/', (req, res) => {
  Photo.create(req.body, (err, CreatedPhoto)=> {
  res.redirect('/photos')
  })
})

//connect route to show.ejs
router.get('/:id', (req, res) => {
  Photo.findById(req.params.id, (err, foundPhoto) => {
    res.render('photos/show.ejs', {
      photos: foundPhoto
      })
    })
})

//add delete route
router.delete('/:id', (req, res) => {
  Photo.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/photos')
  })
})

//add edit route
router.get('/:id/edit', (req,res)=> {
  Photo.findById(req.params.id, (err, foundPhotos) => {
  res.render('photos/edit.ejs', {
  photos: foundPhotos
        })
    })
})

//create put route for edit form
router.put('/:id', (req, res)=>{
  Photo.findByIdAndUpdate(req.params.id, req.body, ()=>{
  res.redirect('/photos');
  });
});


module.exports = router;
