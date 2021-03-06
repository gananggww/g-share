const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  username : String,
  password : String,
  email : String
});

const modelUser = mongoose.model('user', userSchema);

module.exports = modelUser
