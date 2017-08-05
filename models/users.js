const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
  user: String,
  password: String
})

const User = mongoose.model('User', userSchema)
  //must match above
module.exports = User;
