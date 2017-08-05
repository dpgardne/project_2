const express = require('express');
const router = express.Router();
const Photo = require('../models/photos')

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
router.get('/new', (req, res) => {
  res.render('photos/new.ejs')
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

// //add edit router
// router.get('/:id/edit', (req,res)=> {
//   User.findById(req.params.id, (err, foundUsers) => {
//   res.render('users/edit.ejs', {
//   users: foundUsers
//         })
//     })
// })
//
// //create put route for edit form
// router.put('/:id', (req, res)=>{
//   User.findByIdAndUpdate(req.params.id, req.body, ()=>{
//   res.redirect('/users');
//   });
// });

module.exports = router;
