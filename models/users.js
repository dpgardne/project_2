const mongoose = require('mongoose')
//require the photo model
const Photo = require('./photos.js')

const userSchema = mongoose.Schema({
  user: String,
  password: String,
  photos: [Photo.schema]
})

const User = mongoose.model('User', userSchema)
  //must match above
module.exports = User;
