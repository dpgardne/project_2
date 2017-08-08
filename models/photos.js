const mongoose = require('mongoose')

const photoSchema = mongoose.Schema({
  name: String,
  image: String,
  address: String,
  description: String
})

const Photo = mongoose.model('Photo', photoSchema)
  //must match above
module.exports = Photo;
